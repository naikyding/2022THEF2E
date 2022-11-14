console.log('main js')

gsap.to('.box-3', {
  duration: 1,
  x: '100px',
  rotate: '360',

  // 滾動觸發功能
  scrollTrigger: { 
    markers: true, // 顯示 toggle 標記
    trigger: '.box-3', // 觸發元素
    toggleActions: 'play pause resume reverse' // 觸發動作
  },
})