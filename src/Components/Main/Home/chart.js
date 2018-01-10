export const data = {
  columns: [
    ['Crelo', 30, 200, 100, 400, 150, 250],
    ['Arlo', 250, 30, 60, 320, 25, 35],
    ['Lokedo', 50, 20, 10, 40, 15, 25],
    ['Bernali', 250, 30, 60, 320, 25, 35],
    ['Axorfvido', 250, 30, 60, 320, 25, 35],
    ['Menaxjeri', 250, 30, 60, 320, 25, 35],          
 ]
};

export const tooltip = {
  grouped: false
}

let prevItemId = null;
export const legend = {
  item: {
     onclick: function(id){
       let temp = null;
       let legend_items = Array.from(document.getElementsByClassName('c3-legend-item'))
         .filter(item => {
           return !item.classList.contains(`c3-legend-item-${id}`);
         });

       /**Remove effect of the selection from line and legend */
       if (prevItemId === id) {
         legend_items.forEach(item => {
           item.classList.remove('shadow-legend');
         });
         document.getElementsByClassName(`c3-target-${id}`)[0]
           .classList.remove('bolder-line');
         prevItemId = null;

         return null;
       } else {
         /**Making selected legend node visible */
         document.getElementsByClassName(`c3-legend-item-${id}`)[0]
           .classList.remove('shadow-legend');

         /**Making all others legend nodes hidden*/
         legend_items.forEach(item => {
           item.classList.add('shadow-legend');
         });

         prevItemId = id;

         /**Finding line which we need to make bolder*/
         for (let i = 0; i < this.data.targets.length; i++) {
           if (this.data.targets[i].id === id) {
             temp = this.data.targets[i];
             break;
           }
         }

         this.api.unload(id);

         /**Creating temp value to convert unloaded data to
          * acceptable format for load*/
         let tempArr = [];
         for (let i = 0; i < temp.values.length; i++) {
           tempArr.push(temp.values[i].value);

         }
         tempArr.unshift(temp.id);

         /**Loading line to the end of the chart for
          * display on top of all others. Also adding class
          * to make it bolder*/
         setTimeout(() => {
           this.api.load({
             columns: [
               tempArr,
             ],
           });

           Array.from(document.querySelectorAll(`.c3-target-${id}`)).forEach(element => {
             element.classList.add('bolder-line');
           });

           /**Redrawing chart after it has been updated
            * because of x,y markers corruption*/
           setTimeout(() => {
             this.api.flush();
           }, 400);
         }, 300);
       }             
     },
     onmouseover: (id) => { },
     onmouseout: (id) => { }
  }
}