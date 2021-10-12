import React from 'react';
import { throttle } from 'lodash';
import { AutoSizer, List } from 'react-virtualized';

const InfiniteScroll = ({
  className,
  width,
  height,
  list,
  rowHeight,
  component: Component,
  onLoadMoreData,
}) => {
  const handleScroll = ({ scrollTop, scrollHeight, clientHeight }) =>
    scrollHeight === scrollTop + clientHeight && onLoadMoreData();

  const loadMoreData = onLoadMoreData && throttle(handleScroll, 200);

  const rowRenderer = (props) => {
    const item = list[props.index];
    return <Component key={item.id} data={item} {...props} />;
  };

  if (!list || !list.length) return null;

  return (
    <AutoSizer>
      {({ width: autoWidth }) => (
        <List
          className={className || ''}
          width={width || autoWidth}
          height={height}
          rowHeight={rowHeight}
          rowRenderer={rowRenderer}
          rowCount={list.length}
          list={list}
          onScroll={loadMoreData}
        />
      )}
    </AutoSizer>
  );
};

export default InfiniteScroll;
