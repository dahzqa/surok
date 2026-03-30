cloudHover()
cloudHover1()
cloudHover2()
cloudHover3()
passwordInput()
changeDialogOnClick()
makeDraggable()
plateHover()
changeDialogOnClick1()
changeSurochekOnClick()
initFlower()
scrollToThirdBlock()
initDrawing()
makeBerryDraggable()
handleFooterLeaf()

function cloudHover() {
    let cloudElement = document.querySelector('.cloudColor');
    
    if (cloudElement) {
        cloudElement.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        cloudElement.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
}

function cloudHover1() {
    let cloudElement1 = document.querySelector('.cloudColor1');
    
    if (cloudElement1) {
        cloudElement1.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        cloudElement1.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
}

function cloudHover2() {
    let cloudElement2 = document.querySelector('.cloudColor2');
    
    if (cloudElement2) {
        cloudElement2.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        cloudElement2.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
}

function cloudHover3() {
    let cloudElement3 = document.querySelector('.cloudColor3');
    
    if (cloudElement3) {
        cloudElement3.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        cloudElement3.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
}

function passwordInput() {
    let inputs = document.querySelectorAll('.password-input');
    
    if (inputs.length > 0) {
        let correctPassword = '1234';
        
        function checkPassword() {
            let enteredPassword = '';
            inputs.forEach(input => {
                enteredPassword += input.value;
            });
            
            if (enteredPassword.length === 4) {
                if (enteredPassword === correctPassword) {
                    console.log('Пароль верный!');
                } else {
                    console.log('Неверный пароль');
                    setTimeout(() => {
                        inputs.forEach(input => {
                            input.value = '';
                        });
                        inputs[0].focus();
                    }, 500);
                }
            }
        }
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
                
                if (this.value && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
                
                checkPassword();
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && !this.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
            
            input.addEventListener('keyup', function(e) {
                if (e.key === 'ArrowRight' && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
                if (e.key === 'ArrowLeft' && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    }
}

function changeDialogOnClick() {
    let surochek = document.querySelector('.surochek');
    let cloudDialog = document.querySelector('.cloudDialog');
    
    surochek.addEventListener('click', function() {
        cloudDialog.classList.add('dialog2');
    });
}

function makeDraggable() {
    let leaves = document.querySelectorAll('.firstLeaf');
    
    leaves.forEach(leaf => {
        let isDragging = false;
        let startX, startY;
        let startLeft, startTop;
        
        leaf.addEventListener('mousedown', (event) => {
            isDragging = true;
            startX = event.clientX;
            startY = event.clientY;
            startLeft = parseFloat(leaf.style.left) || parseFloat(getComputedStyle(leaf).left);
            startTop = parseFloat(leaf.style.top) || parseFloat(getComputedStyle(leaf).top);
            leaf.style.cursor = 'grabbing';
            event.preventDefault();
        });
        
        window.addEventListener('mousemove', (event) => {
            if (!isDragging) return;
            let deltaX = event.clientX - startX;
            let deltaY = event.clientY - startY;
            leaf.style.left = (startLeft + deltaX) + 'px';
            leaf.style.top = (startTop + deltaY) + 'px';
        });
        
        window.addEventListener('mouseup', () => {
            isDragging = false;
            leaf.style.cursor = 'grab';
        });
    });
}

function plateHover() {
    let plateElement = document.querySelector('.plate');
    
    if (plateElement) {
        plateElement.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        plateElement.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
}

function changeDialogOnClick1() {
    let surochek2 = document.querySelector('.surochek2');
    let dialogSurochek2 = document.querySelector('.dialogSurochek2');
    
    surochek2.addEventListener('click', function() {
        dialogSurochek2.classList.add('dialog3');
    });
}

function changeSurochekOnClick() {
    let surochekElement = document.querySelector('.surochek');
    let clickCount = 0;

    if (surochekElement) {
        surochekElement.addEventListener('click', function() {
            clickCount++;

            if (clickCount == 5) {
                this.classList.add('changed');
            }
            else if (clickCount >= 8) {
                this.classList.remove('changed');
                this.classList.add('changed1');
            }
        });
    }
}

function initFlower() {
    const flower = document.querySelector('.flower');
    const flowerDialog = document.querySelector('.flowerDialog');
    
    flower.addEventListener('click', function() {
        flowerDialog.classList.add('show');
    });
}

function scrollToThirdBlock() {
    let plate = document.querySelector('.plate');
    let thirdBlock = document.querySelector('.thirdBlock');
    
    if (plate && thirdBlock) {
        plate.addEventListener('click', function() {
            thirdBlock.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

function initDrawing() {
    let canvas = document.getElementById('drawingCanvas');
    let ctx = canvas.getContext('2d');
    let colorSquares = document.querySelectorAll('.colorSquare');
    
    let isDrawing = false;
    let currentColor = '#000000';
    
    function getDrawingArea() {
        let container = canvas.parentElement;
        let rect = container.getBoundingClientRect();
        
        let vw = window.innerWidth / 100;
        
        let left = 21 * vw;
        let top = 23 * vw;
        let width = 44 * vw;
        let height = 25 * vw;
       
        let scaleX = canvas.width / rect.width;
        let scaleY = canvas.height / rect.height;
        
        return {
            x: left * scaleX,
            y: top * scaleY,
            width: width * scaleX,
            height: height * scaleY
        };
    }
    
    function resizeCanvas() {
        let container = canvas.parentElement;
        let rect = container.getBoundingClientRect();
        
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
    }
    
    function drawDrawingArea() {
        let area = getDrawingArea();
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(area.x, area.y, area.width, area.height);
        ctx.restore();
    }
    
    function isInDrawingArea(x, y) {
        let area = getDrawingArea();
        return x >= area.x && 
               x <= area.x + area.width &&
               y >= area.y && 
               y <= area.y + area.height;
    }
    
    function startDrawing(e) {
        let pos = getCoordinates(e);
        
        if (isInDrawingArea(pos.x, pos.y)) {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        let pos = getCoordinates(e);
        
        if (isInDrawingArea(pos.x, pos.y)) {
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        } else {
            stopDrawing();
        }
    }
    
    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }
    
    function getCoordinates(e) {
        let rect = canvas.getBoundingClientRect();
        let scaleX = canvas.width / rect.width;
        let scaleY = canvas.height / rect.height;
        
        let clientX, clientY;
        
        if (e.touches) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        let x = (clientX - rect.left) * scaleX;
        let y = (clientY - rect.top) * scaleY;
        
        return { x, y };
    }
    
    function changeColor(color) {
        currentColor = color;
        ctx.strokeStyle = currentColor;
        
        colorSquares.forEach(square => {
            if (square.getAttribute('data-color') === color) {
                square.classList.add('active');
            } else {
                square.classList.remove('active');
            }
        });
    }
    
    colorSquares.forEach(square => {
        square.addEventListener('click', () => {
            let color = square.getAttribute('data-color');
            changeColor(color);
        });
    });
    
    changeColor(currentColor);
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);
    
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

function makeBerryDraggable() {
    let berry = document.querySelector('.berry');
    
    if (!berry) return;
    
    let isDragging = false;
    let startX, startY;
    let startLeft, startTop;
    
    berry.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = parseFloat(berry.style.left) || parseFloat(getComputedStyle(berry).left);
        startTop = parseFloat(berry.style.top) || parseFloat(getComputedStyle(berry).top);
        berry.style.cursor = 'grabbing';
        event.preventDefault();
    });
    
    window.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        let deltaX = event.clientX - startX;
        let deltaY = event.clientY - startY;
        berry.style.left = (startLeft + deltaX) + 'px';
        berry.style.top = (startTop + deltaY) + 'px';
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        berry.style.cursor = 'grab';
    });
}

function handleFooterLeaf() {
    let foooter = document.querySelector('.foooter');
    let footerLeaf = document.querySelector('.footerLeaf');
    let closeCorner = document.querySelector('.closeCorner');
    
    console.log('foooter:', foooter);
    console.log('footerLeaf:', footerLeaf);
    console.log('closeCorner:', closeCorner);
    

    if (foooter && footerLeaf) {
        foooter.addEventListener('click', function() {
            console.log('Клик по foooter');
            footerLeaf.classList.add('visible');
        });
    } else {
        console.log('Элементы не найдены!');
    }
    

    if (closeCorner && footerLeaf) {
        closeCorner.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Клик по углу');
            footerLeaf.classList.remove('visible');
        });
    }
}

