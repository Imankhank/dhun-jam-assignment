

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarGraph = () => {
    const svgRef = useRef();
    const data = [
        { month: "January", cashIn: 104, cashOut: 152 },
        { month: "February", cashIn: 122, cashOut: 184 },
        { month: "March", cashIn: 50, cashOut: 201 },
        { month: "April", cashIn: 150, cashOut: 134 },
        { month: "May", cashIn: 150, cashOut: 134 },
        { month: "June", cashIn: 150, cashOut: 134 },
    ];

    const colors = ["#4fb14f", "#8adaac59"];

    useEffect(() => {
        const margin = { top: 0, right: 10, bottom: 80, left: 10 };
        const width = 800 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const svg = d3
            .select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.month))
            .range([0, width])
            .padding(0.8);

        const yScale = d3.scaleLinear().domain([0, 400]).range([height, 0]);
        const barWidth = xScale.bandwidth() * 0.7; // You can adjust the factor (0.7) to change the bar width

        const xAxis = d3.axisBottom(xScale).tickSize(0);

        svg
            .append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis)
            .selectAll("text") // Select all text elements within the x-axis
            .attr("fill", "hsla(0, 0%, 44%, 0.65)")
            .style("font-size", "15px")// Set the font size here
            .style("font-weight", "500") // Set the font size here
            .style("padding-top", "20px") // Set the font size here
            .attr("dy", "2em"); // Adjust the "1em" value to increase or decrease the space


        const dataset = d3.stack().keys(["cashIn", "cashOut"])(data);

        const groups = svg
            .selectAll(".bars")
            .data(dataset)
            .enter()
            .append("g")
            .attr("class", "bars")
            .style("fill", (d, i) => colors[i]);

        groups
            .selectAll("rect")
            .data((d) => d)
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.data.month) + (xScale.bandwidth() - barWidth) / 2)
            .attr("y", (d) => yScale(d[1]))
            .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
            .attr("width", xScale.bandwidth())
            .attr("ry", 2); // Set the horizontal radius for rounded corners
        ;
    }, []);

    return (
        <div className="no-scrollbars px-2">
            <svg className="d-flex gap-5" ref={svgRef} style={{ display: "block" }}></svg>
        </div>
    );
};

export default BarGraph;
