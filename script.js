// Modal for Show More button
const showMoreButton = document.getElementById('show-more-btn');
const showMoreModal = document.getElementById('no-more-modal'); // Changed name to avoid conflict

// Select all the anchor links within the navbar
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Get the target section by ID
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', init);

        function init() {
            const container = document.getElementById('container');
            const bubbles = [];
            const numBubbles = 10;

            // 创建气泡
            for (let i = 0; i < numBubbles; i++) {
                const bubble = createBubble();
                container.appendChild(bubble.element);
                bubbles.push(bubble);
            }

            // 动画循环
            let lastTime = performance.now();
            function animate(timestamp) {
                const deltaTime = timestamp - lastTime;
                lastTime = timestamp;

                bubbles.forEach(bubble => {
                    updateBubble(bubble, deltaTime);
                });

                requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
        }

        function createBubble() {
            const element = document.createElement('div');
            element.className = 'bubble';
            
            const size = Math.random() * 40 + 20; // 20-60px
            const speed = {
                x: (Math.random() * 0.3 - 0.15) * 0.8, // 减慢速度
                y: (Math.random() * 0.4 - 0.2) * 0.8,  // 减慢速度
                z: (Math.random() * 0.2 - 0.1) * 0.8  // 增加前后移动的减速
            };
            
            // 初始位置在容器范围内
            const position = {
                x: Math.random() * (window.innerWidth - size),
                y: Math.random() * (window.innerHeight - size),
                z: Math.random() * 500 - 250 // 增加前后位置
            };

            element.style.width = `${size}px`;
            element.style.height = `${size}px`;

            return { element, size, speed, position };
        }

        function updateBubble(bubble, deltaTime) {
            // 更新位置
            bubble.position.x += bubble.speed.x * deltaTime;
            bubble.position.y += bubble.speed.y * deltaTime;
            bubble.position.z += bubble.speed.z * deltaTime;

            // 设置固定透明度
            const opacity = 0.7; // 设置固定透明度（例如0.7）

            // 更新大小：根据 z 值调整泡泡大小
            const scale = 1 + (Math.abs(bubble.position.z) / 500); // 根据 z 值调整比例

            // 应用变换：包含缩放和透明度变化
            bubble.element.style.transform = `
                translate3d(
                    ${bubble.position.x}px, 
                    ${bubble.position.y}px, 
                    ${bubble.position.z}px) 
                scale(${scale})
            `;

            // 边界碰撞检测
            handleCollision(bubble);
        }

        function handleCollision(bubble) {
            // X轴边界
            if (bubble.position.x < 0) {
                bubble.speed.x = Math.abs(bubble.speed.x) * 0.95; // 轻微能量损失
                bubble.position.x = 0;
            } 
            else if (bubble.position.x + bubble.size > window.innerWidth) {
                bubble.speed.x = -Math.abs(bubble.speed.x) * 0.95;
                bubble.position.x = window.innerWidth - bubble.size;
            }

            // Y轴边界
            if (bubble.position.y < 0) {
                bubble.speed.y = Math.abs(bubble.speed.y) * 0.95;
                bubble.position.y = 0;
            } 
            else if (bubble.position.y + bubble.size > window.innerHeight) {
                bubble.speed.y = -Math.abs(bubble.speed.y) * 0.95;
                bubble.position.y = window.innerHeight - bubble.size;
            }

            // Z轴限制（不反弹）
            bubble.position.z = Math.max(-500, Math.min(500, bubble.position.z));
        }

        // 窗口大小变化处理
        window.addEventListener('resize', () => {
            document.querySelectorAll('.bubble').forEach(bubble => {
                const size = parseInt(bubble.style.width);
                bubble.position.x = Math.min(
                    bubble.position.x, 
                    window.innerWidth - size
                );
                bubble.position.y = Math.min(
                    bubble.position.y,
                    window.innerHeight - size
                );
            });
        });
showMoreButton.addEventListener('click', function () {
    showMoreModal.style.display = 'flex';
});

const closeShowMoreModalButton = document.querySelector('.close-modal-btn');
closeShowMoreModalButton.addEventListener('click', function () {
    showMoreModal.style.display = 'none';
});

// Modal for Project Breakdown buttons (for multiple buttons)
const projectBreakdownButtons = document.querySelectorAll('.project-breakdown-btn'); // Select all buttons
const projectBreakdownModals = document.querySelectorAll('.popup-modal'); // Select all modals
const closeProjectBreakdownModalButtons = document.querySelectorAll('.close-btn-work'); // Select all close buttons

projectBreakdownButtons.forEach((button, index) => {
    // Open modal when the button is clicked
    button.onclick = function () {
        projectBreakdownModals[index].style.display = 'flex'; // Display the modal
    };

    // Close modal when the close button is clicked
    closeProjectBreakdownModalButtons[index].onclick = function () {
        projectBreakdownModals[index].style.display = 'none'; // Hide the modal
    };
});

window.onclick = function (event) {
    // Close modals if clicking outside
    projectBreakdownModals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

function togglePrivacyPolicy() {
    document.getElementById('privacy-policy-content').style.display = 'block';
    document.getElementById('privacy-overlay').style.display = 'block';
}

function hidePrivacyPolicy() {
    document.getElementById('privacy-policy-content').style.display = 'none';
    document.getElementById('privacy-overlay').style.display = 'none';
}



function toggleMenu() {
    const menuOverlay = document.getElementById('menu-overlay');
    if (menuOverlay.style.display === 'block') {
        menuOverlay.style.display = 'none';
    } else {
        menuOverlay.style.display = 'block';
    }
}
