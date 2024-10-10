  // Stack representation of towers
  const towers = {
    tower1: [],
    tower2: [],
    tower3: []
  };

  // Initial state with disks on the first tower
  towers.tower1.push(
    { id: 'disk-3', size: 3 },
    { id: 'disk-2', size: 2 },
    { id: 'disk-1', size: 1 }
  );

  // HTML Elements representing the towers
  const towerElements = {
    tower1: document.getElementById('tower1'),
    tower2: document.getElementById('tower2'),
    tower3: document.getElementById('tower3')
  };

  // Function to render disks on each tower based on the stack state
  function renderTowers() {
    for (let tower in towers) {
      // Clear current tower display
      towerElements[tower].innerHTML = '';
      // Append disks from stack to tower display
      towers[tower].forEach(disk => {
        const diskElement = document.createElement('div');
        diskElement.classList.add('disk');
        diskElement.id = disk.id;
        diskElement.style.width = disk.size * 75 + 'px';
        diskElement.dataset.size = disk.size;
        towerElements[tower].appendChild(diskElement);
      });
    }
  }

  // Initial rendering of towers
  renderTowers();

  let selectedDisk = null;
  let selectedTower = null;

  // Tower click event listener
  document.querySelectorAll('.tower').forEach(towerElement => {
    towerElement.addEventListener('click', function() {
      const towerId = this.id
      const towerStack = towers[towerId];

      if (selectedDisk === null) {
        // Select top disk from this tower (pop from stack)
        if (towerStack.length > 0) {
          selectedDisk = towerStack.pop();
          document.getElementById(selectedDisk.id).classList.add("selected")
        //   selectedDisk.classList.add("selected")
          selectedTower = towerId;
        //   renderTowers(); // Update towers after removing the selected disk
        }
      } else {
        // Try to place the selected disk on this tower (push onto stack)
        const topDiskOnThisTower = towerStack[towerStack.length - 1];

        if (!topDiskOnThisTower || topDiskOnThisTower.size > selectedDisk.size) {
          towerStack.push(selectedDisk);
          selectedDisk = null;
          selectedTower = null;
        } else {
          // Invalid move, put disk back to its original tower
          towers[selectedTower].push(selectedDisk);
          selectedDisk = null;
          selectedTower = null;
        //   alert('You cannot place a larger disk on a smaller disk!');
        }
        renderTowers(); // Update towers after the move
        checkForWin(); // Check if the game is won
      }
    });
  });

  // Check for winning condition
  function checkForWin() {
    if (towers.tower3.length === 3) {
      alert('You won!');
    }
    
  }