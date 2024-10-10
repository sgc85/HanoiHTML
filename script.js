

const left = document.getElementById("left")
const middle = document.getElementById("middle")
const right = document.getElementById("right")

const small = document.createElement("div")
small.classList.add("disk", "small")

const medium = document.createElement("div")
medium.classList.add("disk", "medium")

const large = document.createElement("div")
large.classList.add("disk", "large")

const currentDisks = null

const towers = {
    left: { disks: [small, medium, large], top: 2 },
    middle: { disks: [], top: -1 },
    right: { disks: [], top: -1 }
}

function displayDisks() {
    //left tower
    left.innerHTML = "" //clear tower
    disks = towers.left.disks

    for (disk of disks) {
        console.log(disk)
        left.appendChild(disk)
    }
}

function moveDisk(tower) {
    let towerID = tower.id
    let disksOnTower = towers[towerID].disks
    let topPointer = towers[towerID].top

    if (currentDisks === null) {
        if (towers[tower.id].disks[top] > -1) {
            currentDisks = towers[tower.id].disks[top]
            towers[tower.id].top--
        }
    }
    else{
        if towers[tower.id].disks
    }
}

