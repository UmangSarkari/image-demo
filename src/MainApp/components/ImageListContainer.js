import React from "react";
import axios from "axios";
import List from "./List";
import Loader from "./Loader";
import ActiveDPContext from "../contexts/ActiveDPContext";
import { withContext, resolveDPValue } from "../Utility";
import { listContainerStyle } from "../styles";

class ImageListContainer extends React.Component {
  state = { data: [], currentPage: 0, loading: true };

  componentDidMount() {
    this.loadImages({ page: this.state.currentPage + 1 });
  }

  loadImages = params => {
    let { limit = 15, page } = params || {};
    return axios
      .get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then(res => {
        let { data = [] } = res;
        this.setState({
          data: [...this.state.data, ...data],
          currentPage: page,
          loading: false,
          hasNext: !(data.length < limit)
        });
      })
      .catch(err => this.setState({ error: true, loading: false }));
  };

  loadMore = () => {
    if (this.state.hasNext) {
      this.setState({ loading: true }, () => {
        this.loadImages({ page: this.state.currentPage + 1 });
      });
    }
  };

  renderItem = ({ item }) => {
    let { download_url, id, author } = item;
    let { colStyle, imgContainerStyle, headerStyle, descStyle, imgStyle, colPerRow } = resolveDPValue(
      listContainerStyle,
      ["colStyle", "imgContainerStyle", "headerStyle", "descStyle", "imgStyle", "colPerRow"],
      this.props.activeDP
    );
    return (
      <div key={id} style={{ ...colStyle, width: `${100 / colPerRow}%` }}>
        <div style={imgContainerStyle}>
          <img src={download_url} alt="sample_image" {...imgStyle} />
        </div>
        <div style={headerStyle}>{author}</div>
        <div style={descStyle}>Some Description</div>
      </div>
    );
  };

  renderRow = ({ item }) => item; // already a react element as calculated in render method

  render() {
    let { data, loading, hasNext } = this.state;
    let { activeDP } = this.props;
    let { containerStyle, colPerRow = 1, rowStyle, loadMoreStyle } = resolveDPValue(
      listContainerStyle,
      ["containerStyle", "colPerRow", "rowStyle", "loadMoreStyle"],
      activeDP
    );

    let items = data.map((item, index) => {
      return this.renderItem({ item, index });
    });

    let rendersToShow = [];
    let iterationCount = Math.ceil(data.length / colPerRow);
    for (let i = 0; i < iterationCount; i++) {
      let row = [];
      for (let j = i * colPerRow; j < (i + 1) * colPerRow; j++) {
        if (items[j]) {
          row.push(items[j]);
        } else {
          row.push(<div key={j} style={rowStyle} />);
        }
      }
      rendersToShow.push(
        <div key={`row_${i}`} style={rowStyle}>
          {[...row]}
        </div>
      );
    }

    let LoadMoreComponent = (
      <div onClick={this.loadMore} style={loadMoreStyle}>
        Load More
      </div>
    );

    // itemHeight: calculated as per styling (fixed height):: recalculate if change in style
    return (
      <div style={containerStyle}>
        {/* <List data={rendersToShow} renderItem={this.renderRow} /> */}
        <List data={rendersToShow} itemHeight={341} renderItem={this.renderRow} />
        {loading && <Loader />}
        {hasNext && !loading && LoadMoreComponent}
      </div>
    );
  }
}

export default withContext(ActiveDPContext, ImageListContainer, "activeDP");
