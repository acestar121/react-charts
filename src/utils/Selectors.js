import Memoize from './Memoize'

export default {
  primaryAxis: () =>
    Memoize(
      state => [state.axes],
      axes => {
        if (!axes) return
        let found
        Object.keys(axes).forEach(key => {
          if (!found && axes[key].primary) {
            found = axes[key]
          }
        })
        return found
      }
    ),

  secondaryAxis: () =>
    Memoize(
      state => [state.axes],
      axes => {
        if (!axes) return
        let found
        Object.keys(axes).forEach(key => {
          if (!found && !axes[key].primary) {
            found = axes[key]
          }
        })
        return found
      }
    ),

  offset: () =>
    Memoize(
      state => [
        (state && state.offset && state.offset.left) || 0,
        (state && state.offset && state.offset.top) || 0,
      ],
      (left, top) => ({
        left,
        top,
      })
    ),

  gridX: () =>
    Memoize(
      state => [
        (state && state.padding && state.padding.left) || 0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.left &&
          state.axisDimensions.left.width) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.top &&
          state.axisDimensions.top.left) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.bottom &&
          state.axisDimensions.bottom.left) ||
          0,
      ],
      (paddingLeft, axesLeftWidth, axesTopLeft, axesBottomLeft) =>
        paddingLeft + Math.max(axesLeftWidth, axesTopLeft, axesBottomLeft)
    ),

  gridY: () =>
    Memoize(
      state => [
        (state && state.padding && state.padding.top) || 0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.top &&
          state.axisDimensions.top.height) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.left &&
          state.axisDimensions.left.top) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.right &&
          state.axisDimensions.right.top) ||
          0,
      ],
      (paddingTop, axesTopHeight, axesLeftTop, axesRightTop) =>
        paddingTop + Math.max(axesTopHeight, axesLeftTop, axesRightTop)
    ),

  gridWidth: () =>
    Memoize(
      state => [
        (state && state.width && state.width) || 0,
        (state && state.padding && state.padding.left) || 0,
        (state && state.padding && state.padding.right) || 0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.left &&
          state.axisDimensions.left.width) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.right &&
          state.axisDimensions.right.width) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.top &&
          state.axisDimensions.top.left) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.top &&
          state.axisDimensions.top.right) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.bottom &&
          state.axisDimensions.bottom.left) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.bottom &&
          state.axisDimensions.bottom.right) ||
          0,
      ],
      (
        width,
        paddingLeft,
        paddingRight,
        axesLeftWidth,
        axesRightWidth,
        axesTopLeft,
        axesTopRight,
        axesBottomLeft,
        axesBottomRight
      ) =>
        width -
        paddingLeft -
        paddingRight -
        Math.max(axesLeftWidth, axesTopLeft, axesBottomLeft) -
        Math.max(axesRightWidth, axesTopRight, axesBottomRight)
    ),

  gridHeight: () =>
    Memoize(
      state => [
        (state && state.height) || 0,
        (state && state.padding && state.padding.top) || 0,
        (state && state.padding && state.padding.bottom) || 0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.top &&
          state.axisDimensions.top.height) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.bottom &&
          state.axisDimensions.bottom.height) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.left &&
          state.axisDimensions.left.top) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.left &&
          state.axisDimensions.left.bottom) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.right &&
          state.axisDimensions.right.top) ||
          0,
        (state &&
          state.axisDimensions &&
          state.axisDimensions.right &&
          state.axisDimensions.right.bottom) ||
          0,
      ],
      (
        height,
        paddingTop,
        paddingBottom,
        axesTopHeight,
        axesBottomHeight,
        axesLeftTop,
        axesLeftBottom,
        axesRightTop,
        axesRightBottom
      ) =>
        height -
        paddingTop -
        paddingBottom -
        Math.max(axesTopHeight, axesLeftTop, axesRightTop) -
        Math.max(axesBottomHeight, axesLeftBottom, axesRightBottom)
    ),
}
