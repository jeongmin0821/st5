document.addEventListener('DOMContentLoaded', () => {

      const containerElem = document.getElementById('headcontainer');

      const containerLeft = containerElem.getBoundingClientRect().left;

      const listElem = document.getElementById('headtext');

      let currentLeftValue = 0;

      window.setInterval(animationLoop, 10);

      function animationLoop() {


        const firstListItem = listElem.querySelector('.hd-text-item:first-child');

        let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

        if (rightSideOfFirstItem == containerLeft) {
          currentLeftValue = -1;
          listElem.appendChild(firstListItem);
        }


        listElem.style.marginLeft = `${currentLeftValue}px`;
        currentLeftValue--;


      }
    });
