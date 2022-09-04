<template>
  <div class="about">
    <div id="svg"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { Svg, SVG } from '@svgdotjs/svg.js'
interface Point {
  w: number
  h: number
  x: number
  y: number
}
onMounted(() => {
  let draw1 = SVG().addTo('#svg').size('100%', '100%')
  let line1 = draw1.line(0, 0, 200, 200).stroke({ width: 2, color: '#333' })
  let circle1 = draw1
    .circle(50)
    .attr({ fill: '#f06', cx: 200, cy: 200, class: 'c1' })
  let react = draw1
    .rect(100, 100)
    .radius(10)
    .attr({ fill: '#f06', x: 50, y: 50, class: 'r1' })
  let c1Rect = SVG('.c1')
  c1Rect.fill('yellow')
  let group1 = draw1.group()
  group1.add(circle1)
  group1.linkTo('www.google.com')
  let origin: Point = {
    w: 100,
    h: 100,
    x: 50,
    y: 50
  }
  let target: Point = {
    w: 50,
    h: 50,
    x: 200,
    y: 200
  }
  bottomLine(draw1, origin, target)
  // let span = draw1.element('span').words('+').attr({
  //   x: 100,
  //   y: 110
  // })
  // console.log('span', span)

  // let draw2 = draw1.nested()
  // console.log('draw2', draw2)
  // draw2.circle(50).move(200, 200).fill('green')
})

function bottomLine(draw: Svg, from: Point, to: Point) {
  draw
    .line(from.x + from.w / 2, from.y + from.h, to.x - to.w / 2, to.y)
    .stroke({ width: 2, color: 'red' })
}
</script>

<style lang="less">
.about {
  width: 800px;
  height: 800px;
  margin: 0 auto;
  #svg {
    width: 100%;
    height: 100%;
  }
}
</style>
