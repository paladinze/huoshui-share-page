import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#CED3DC', 'rgba(0, 182, 173, 0.37)', '#00b5ad']

const ChartPieGap = (props) => {
  const data = [
    { name: '差评率', value: props.countBadReview },
    { name: '中评率', value: props.countAverageReview },
    { name: '好评率', value: props.countGoodReview },
  ]
  const renderCustomizedLabel = ({ percent }) => (
    `${(percent * 100).toFixed(0)}%`
  )
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          left: 0,
          right: 0,
          top: '50%',
          position: 'absolute',
          textAlign: 'center',
          fontSize: '2em',
          color: '#00b5ad',
        }}
      >
        {
          (props.countReview)
          ? `${((props.countGoodReview / props.countReview) * 100).toFixed(0)}%`
          : '暂无评价'
        }
      </div>
      <ResponsiveContainer>
        <PieChart
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <Pie
            data={data}
            isAnimationActive={false}
            innerRadius={45}
            outterRadius={55}
          >
            {data.map((entry, index) =>
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />,
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPieGap
