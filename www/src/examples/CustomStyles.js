import React, { Component } from 'react'
//
import Sidebar from 'components/Sidebar'
import ChartConfig from 'components/ChartConfig'
import Code from 'components/Code'

import { Chart, Axis, Series, Tooltip } from 'react-charts'

let sourceCode

class Story extends Component {
  render () {
    return (
      <Sidebar>
        <div>
          <ChartConfig interaction="axis" show={['elementType', 'interaction']}>
            {({ elementType, interaction, data }) => (
              // @source sourceCode
              <Chart data={data} interaction={interaction}>
                <Axis primary type="time" position="bottom" />
                <Axis type="linear" position="left" stacked />
                <Series
                  type={elementType}
                  getStyles={series => ({
                    color: series.otherHovered && 'grey',
                    opacity: series.otherHovered ? 0.2 : 1,
                    line: {
                      strokeDasharray: '5, 5',
                    },
                  })}
                  getDataStyles={d => ({
                    r: d.hovered ? 5 : d.selected ? 4 : d.otherHovered ? 2 : 3,
                    strokeWidth: 2,
                    strokeDasharray: '5, 5',
                    opacity: d.hovered
                      ? 1
                      : d.selected
                        ? 1
                        : d.otherHovered
                          ? 0.5
                          : d.otherSelected
                            ? 0.75
                            : 1,
                  })}
                />
                <Tooltip />
              </Chart>
              // @source sourceCode
            )}
          </ChartConfig>
          <Code source={sourceCode} />
        </div>
      </Sidebar>
    )
  }
}

export default () => <Story />
