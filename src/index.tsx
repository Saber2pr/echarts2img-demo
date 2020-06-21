/*
 * @Author: saber2pr
 * @Date: 2020-06-21 20:51:25
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2020-06-21 20:51:25
 */
import TSX, { CSSStyle, render, useRef, useEffect } from "@saber2pr/tsx"
import echarts from "echarts"
import html2canvas from "html2canvas"

function Styled<T extends { [k: string]: CSSStyle }>(styleObj: T) {
  return styleObj
}

const styled = Styled({
  chart: {
    width: "100%",
    height: "180px",
    marginBottom: "20px",
    border: "1px solid"
  },
  contain: {
    padding: "10px 10px"
  },
  img: {
    width: "100%",
    display: "none"
  }
})

const option2 = {
  backgroundColor: "#231434",
  animation: false,
  textStyle: {
    color: "#fff"
  },
  lineStyle: {
    color: "#57ea8f"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: 10,
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    }
  ]
}

const option1 = {
  backgroundColor: "#231434",
  animation: false,
  textStyle: {
    color: "#fff"
  },
  lineStyle: {
    color: "#57ea8f"
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line"
    }
  ]
}

const App = () => {
  const root = useRef<HTMLDivElement>()
  const ref1 = useRef<HTMLDivElement>()
  const ref2 = useRef<HTMLDivElement>()
  const imgRef = useRef<HTMLImageElement>()

  useEffect(() => {
    echarts.init(ref1.current).setOption(option1 as any)
    echarts.init(ref2.current).setOption(option2 as any)
    html2canvas(root.current).then(canvas => {
      imgRef.current.src = canvas.toDataURL("image/png")
      switchImg()
    })
  })

  const switchImg = () => {
    root.current.style.display = "none"
    imgRef.current.style.display = "block"
  }

  return (
    <div>
      <img ref={imgRef} style={styled.img} />
      <div ref={root} style={styled.contain}>
        <div style={styled.chart} ref={ref1} />
        <div style={styled.chart} ref={ref2} />
      </div>
    </div>
  )
}

render(<App />, document.querySelector("#root"))
