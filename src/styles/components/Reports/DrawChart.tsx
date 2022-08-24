import * as d3 from "d3";
import * as React from "react";

interface ChartPoint {
  date: Date;
  pointTotal: number;
  cum: number;
  ytd: number;
}

interface ChartLine {
  color: string;
  name: string;
  points: ChartPoint[];
}

function lineChart(svgRef: React.RefObject<SVGSVGElement>, data: ChartLine[]) {
  const svg = d3.select(svgRef.current);

  const width = 1050;
  const height = 580;
  const margin = 50;
  const duration = 250;
  const lineOpacity = "1";
  const circleOpacity = "0.85";
  const circleRadius = 5;
  const circleRadiusHover = 6;

  const tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background-color", "#ffffff");

  const emptyChart = 0 === data.length;

  var d = new Date();

  /* Scale - // map through all the months for empty chart dates*/
  const [minX, maxX] = emptyChart
    ? [d.setMonth(d.getMonth() - 12), d.setMonth(d.getMonth() - 12)]
    : d3.extent<ChartPoint, Date>(data[0].points, (d) => d.date);

  const xScale = d3
    .scaleTime()
    .domain([minX!, maxX!])
    .range([0, width - margin]);

  const [minY, maxY] = emptyChart
    ? [0, 2200]
    : d3.extent<{ ytd: number }, number>(data[0].points, (d) => d.ytd); // TODO - loop through each line's points += .points 4 extent

  // @ts-ignore
  const yScale = d3
    .scaleLinear()
    .domain([minY!, maxY!])
    .range([height - margin, 0]);

  /* Add SVG */
  svg
    .attr("viewBox", `500 0 50 100`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  const xAxis = d3
    .axisBottom(xScale)
    .tickSizeOuter(0)
    .tickSize(height - margin)
    .tickFormat(
      d3.timeFormat("%b") as unknown as (
        dv: number | { valueOf(): number },
        i: number
      ) => string
    )
    .tickPadding(15);

  const yAxis = d3
    .axisLeft(yScale)
    .tickSize(margin - width)
    .tickSizeOuter(0)
    .ticks(12)
    .tickPadding(30);

  // Add the X Axis
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(${margin}, ${margin})`)
    .attr("font-weight", "100")
    .attr("font-family", '"Roboto", "sans-serif"')
    .call(xAxis)
    .selectAll("text")
    .style("fill", "#556066");

  // Add the Y Axis
  svg
    .append("g")
    .attr("class", "y axis")
    .attr("transform", `translate(${margin}, ${margin})`)
    .attr("font-weight", "100")
    .attr("font-family", '"Roboto", "sans-serif"')
    .call(yAxis)
    .append("text")
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .selectAll("text")
    .style("fill", "#556066");
  // .attr('font-family', '"Roboto", "sans-serif"');

  if (false === emptyChart) {
    /* Add line into SVG */
    const line = d3
      .line<ChartPoint>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.ytd));

    const lines = svg
      .append("g")
      .attr("class", "lines")
      .attr("transform", `translate(${margin}, ${margin})`);

    // draws out line and different points
    lines
      .selectAll("line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      // .on('mouseover', function (_e: MouseEvent, d) {
      //   //Text that displays on hover (Line)
      //   svg
      //     .append('text')
      //     .attr('class', 'title-text')
      //     .style('fill', d.color)
      //     .text(d.name)
      //     // font size
      //     .attr('font-size', '24px')
      //     .attr('text-anchor', 'middle')
      //     .attr('x', 365)
      //     .attr('y', 80);
      // })
      .on("mouseout", function (d: ChartLine) {
        svg.select(".title-text").remove();
      })
      .append("path")
      .attr("class", "line")
      .attr("d", (d) => line(d.points))
      // line color that connects dots
      // map through different lines with different colors for each line
      .style("stroke", (d, i) => d.color)
      .style("fill", "none")
      .style("opacity", lineOpacity);
    // Hover action that thickens line when hovering over
    // .on('mouseover', function () {
    //   d3.selectAll('.line').style('opacity', otherLinesOpacityHover);
    //   d3.selectAll('.circle').style('opacity', circleOpacityOnLineHover);
    //   d3.select(this)
    //     .style('opacity', lineOpacityHover)
    //     .style('stroke-width', lineStrokeHover)
    //     .style('cursor', 'pointer');
    // })
    // .on('mouseout', function () {
    //   d3.selectAll('.line').style('opacity', lineOpacity);
    //   d3.selectAll('.circle').style('opacity', circleOpacity);
    //   d3.select(this).style('stroke-width', lineStroke).style('cursor', 'none');
    // });

    // /* Add circles in the line */
    lines
      .selectAll("circle-group")
      .data(data)
      .enter()
      .append("g")
      .style("fill", (d, i) => d.color)
      .selectAll("circle")
      .data((d) => d.points)
      .enter()
      .append("g")
      .attr("class", "circle")
      .on("mouseover", function (_e: MouseEvent, d) {
        // display amount on hovering of points -- tooltip
        d3.select<SVGGElement, ChartPoint>(this).style("cursor", "pointer");
        tooltip
          .html(
            `${d3.timeFormat("%b")(d.date)}: &nbsp &nbsp &nbsp +${
              d.pointTotal
            }` +
              "<br/>" +
              `YTD: &nbsp &nbsp +${d.ytd}` +
              "<br/>" +
              `<tr><td>Cum: &nbsp &nbsp &nbsp</td><td>${d.cum}</td></tr>`
          )
          .style("visibility", "visible")
          .style("color", "white")
          .style("background-color", "#0A4766")
          .style("font-size", "12px")
          .style("width", "104px")
          // padding
          .style("padding", ".7rem 1.5rem .7rem 1.5rem")
          .style("font-weight", "100")
          .style("font-family", "Roboto")
          .style("border-radius", "4px")
          .style("left", _e.pageX + 5 + "px")
          .style("top", _e.pageY - 28 + "px");
      })
      .on("mouseout", function () {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text")
          .remove();
        tooltip.style("visibility", "hidden");
      })
      .append("circle")
      .attr("cx", (d) => xScale(d.date!))
      .attr("cy", (d) => yScale(d.ytd))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(duration).attr("r", circleRadius);
      });
  }
}

interface DrawChart {
  data: ChartLine[];
}

export const DrawChart = (props: DrawChart) => {
  const svg = React.useRef<SVGSVGElement>(null);

  const svgWithRef = <svg ref={svg} preserveAspectRatio="xMidYMid meet" />;

  d3.select(svg.current).selectAll("g > *").remove();

  lineChart(svg, props.data);

  return svgWithRef;
};
