import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
const Linegraph = ({ selectedMonth }) => {
    const svgRef = useRef();
    useEffect(() => {
        const w = 800;
        const h = 180;
        const svg = d3
            .select(svgRef.current)
            .attr("width", w)
            .attr("height", h)
            .style("overflow", "visible");

        svg.selectAll("*").remove();

        const xScale = d3
            .scaleLinear()
            .domain([0, Object.keys(selectedMonth?.data)?.length - 1])
            .range([0, w]);

        const yScale = d3.scaleLinear().domain([0, d3.max(Object.values(selectedMonth?.data))]).range([h, 0]);

        const generateScaledLine = d3
            .line()
            .x((d, i) => xScale(i))
            .y((d) => yScale(d))
            .curve(d3.curveBasis);

        const xAxis = d3
            .axisBottom(xScale)
            .tickValues(d3.range(0, Object.keys(selectedMonth?.data).length, 2))
            .ticks(Object.keys(selectedMonth?.data).length)
            .tickFormat((i) => Object.keys(selectedMonth?.data)[i])
            .tickSize(0)
            .tickPadding(10) // Adjust the padding to ensure proper spacing

        svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`).selectAll("text") // Select all text elements within the x-axis
            .attr("fill", "hsla(0, 0%, 44%, 0.65)");;
        svg
            .selectAll(".line")
            .data([Object.values(selectedMonth?.data)])
            .join("path")
            .attr("d", (d) => generateScaledLine(d))
            .attr("fill", "none")
            .attr("stroke", "#4fb14f")
            .attr("stroke-width", 3); // Set the width here
    }, [selectedMonth]);

    return (
        <div className="no-scrollbars" style={{
        }}>
            <svg ref={svgRef} style={{ margin: "30px", display: "block", width: "100%" }}></svg>
        </div>
    );
};

export default Linegraph;
