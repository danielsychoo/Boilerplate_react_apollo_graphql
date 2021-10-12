import React from 'react';
import styles from './ScrollBox.module.scss';
import ScrollHeader from '../_scrollBox/ScrollHeader';
import InfiniteScroll from '../InfiniteScroll';

const ScrollBox = ({
  // header
  title,
  columns,
  // scroll
  width,
  height,
  rowHeight,
  list,
  component,
  onLoadMoreData,
}) => {
  return (
    <div className={styles.ScrollBox}>
      <ScrollHeader title={title} columns={columns} />
      <InfiniteScroll
        width={width}
        height={height}
        rowHeight={rowHeight || 60}
        rowCount={list.length}
        list={list}
        component={component}
        onLoadMoreData={onLoadMoreData}
      />
    </div>
  );
};
export default ScrollBox;
