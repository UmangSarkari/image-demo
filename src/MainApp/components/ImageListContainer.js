import React from "react";
import axios from "axios";
import VirtualizedList from "./VirtualizedList";
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
        // change resolution of images as images fetched were very heavy
        data = data.map(doc => {
          let imageUrl = doc.download_url;
          // get second last index of "/" which holds resolution values and chnage resolution to 250
          imageUrl = imageUrl.substring(0, imageUrl.lastIndexOf("/", imageUrl.lastIndexOf("/") - 1)) + "/250";
          return { ...doc, imageUrl };
        });
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

  renderItem = ({ item, isVisible }) => {
    let { imageUrl, id, author } = item || {};
    let { colStyle, imgContainerStyle, headerStyle, descStyle, imgStyle, colPerRow } = resolveDPValue(
      listContainerStyle,
      ["colStyle", "imgContainerStyle", "headerStyle", "descStyle", "imgStyle", "colPerRow"],
      this.props.activeDP
    );
    return (
      <div key={id} style={{ ...colStyle, width: `${100 / colPerRow}%` }}>
        {item && (
          <>
            <div style={imgContainerStyle}>{isVisible && <img src={imageUrl} alt="sample_image" {...imgStyle} />}</div>
            <div style={headerStyle}>{author}</div>
            <div style={descStyle}>Some Description</div>
          </>
        )}
      </div>
    );
  };

  renderRow = ({ index, isVisible }) => {
    let { colPerRow = 1, rowStyle } = resolveDPValue(
      listContainerStyle,
      ["colPerRow", "rowStyle"],
      this.props.activeDP
    );

    let { data = [] } = this.state;
    let rowItems = [];
    for (let i = index * colPerRow; i < (index + 1) * colPerRow; i++) {
      rowItems.push(this.renderItem({ item: data[i], isVisible }));
    }
    return (
      <div key={`row_${index}`} style={rowStyle}>
        {[...rowItems]}
      </div>
    );
  };

  loadMoreComponent = style => (
    <div onClick={this.loadMore} style={style}>
      Load More
    </div>
  );

  render() {
    let { data = [], loading, hasNext } = this.state;
    let { activeDP } = this.props;
    let { containerStyle, loadMoreStyle, colPerRow } = resolveDPValue(
      listContainerStyle,
      ["containerStyle", "loadMoreStyle", "colPerRow"],
      activeDP
    );

    // itemHeight: calculated as per styling (fixed height):: recalculate if change in style
    return (
      <div style={containerStyle}>
        <VirtualizedList dataLength={Math.ceil(data.length / colPerRow)} itemHeight={341} renderItem={this.renderRow} />
        {loading && <Loader />}
        {hasNext && !loading && this.loadMoreComponent(loadMoreStyle)}
      </div>
    );
  }
}

export default withContext(ActiveDPContext, ImageListContainer, "activeDP");
