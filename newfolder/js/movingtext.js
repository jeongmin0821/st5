document.addEventListener('DOMContentLoaded', () => {

      const containerElem = document.getElementById('move_container');

      const containerLeft = containerElem.getBoundingClientRect().left;

      const listElem = document.getElementById('move_text');

      let currentLeftValue = 0;


      window.setInterval(animationLoop, 10);


      function animationLoop() {



        const firstListItem = listElem.querySelector('.move_text_item:first-child');

        let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;


        if (rightSideOfFirstItem == containerLeft) {
          currentLeftValue = -1;
          listElem.appendChild(firstListItem);
        }

        listElem.style.marginLeft = `${currentLeftValue}px`;
        currentLeftValue--;
        // currentLeftValue = currentLeftValue - 1

      }
    });
