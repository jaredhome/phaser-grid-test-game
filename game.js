const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'phaser-example',
	scene: {
	  preload: preload,
	  create: create,
	  update: update
	}
  }
  
  const game = new Phaser.Game(config)
  let highlight
  const gridCellSize = 40 // Size of each grid cell
  
  function preload() {
  }
  
  function create() {
	drawGrid(this)
  
	// Mouse move handler for highlighting cells
	this.input.on('pointermove', function(pointer) {
	  let x = Math.floor(pointer.x / gridCellSize)
	  let y = Math.floor(pointer.y / gridCellSize)
	  highlightCell(this, x, y)
	}, this)
  
	// Mouse click handler for selecting cells
	this.input.on('pointerdown', function(pointer) {
	  let x = Math.floor(pointer.x / gridCellSize)
	  let y = Math.floor(pointer.y / gridCellSize)
	  selectCell(x, y)
	}, this)
  }
  
  function update() {
  }
  
  function drawGrid(scene) {
	const graphics = scene.add.graphics({ lineStyle: { width: 1, color: 0xffffff } })
	const gridWidth = 20 // Number of cells horizontally
	const gridHeight = 15 // Number of cells vertically
  
	for (let i = 0; i <= gridWidth; i++) {
	  graphics.lineBetween(i * gridCellSize, 0, i * gridCellSize, gridCellSize * gridHeight)
	}
	for (let j = 0; j <= gridHeight; j++) {
	  graphics.lineBetween(0, j * gridCellSize, gridCellSize * gridWidth, j * gridCellSize)
	}
  }
  
  function highlightCell(scene, x, y) {
	if (!highlight) {
	  highlight = scene.add.graphics({ fillStyle: { color: 0x76baff, alpha: 0.5 } })
	}
	highlight.clear()
	highlight.fillRect(x * gridCellSize, y * gridCellSize, gridCellSize, gridCellSize)
  }
  
  function selectCell(x, y) {
	console.log(`Cell selected at: ${x}, ${y}`)
	// Add any logic you want to execute upon cell selection here
  }
  