/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 2970.0, "series": [{"data": [[0.0, 4.0], [0.1, 11.0], [0.2, 19.0], [0.3, 189.0], [0.4, 313.0], [0.5, 330.0], [0.6, 336.0], [0.7, 340.0], [0.8, 342.0], [0.9, 343.0], [1.0, 345.0], [1.1, 346.0], [1.2, 347.0], [1.3, 348.0], [1.4, 349.0], [1.5, 349.0], [1.6, 350.0], [1.7, 351.0], [1.8, 351.0], [1.9, 352.0], [2.0, 352.0], [2.1, 353.0], [2.2, 353.0], [2.3, 354.0], [2.4, 354.0], [2.5, 355.0], [2.6, 355.0], [2.7, 355.0], [2.8, 356.0], [2.9, 356.0], [3.0, 356.0], [3.1, 357.0], [3.2, 357.0], [3.3, 357.0], [3.4, 358.0], [3.5, 358.0], [3.6, 358.0], [3.7, 359.0], [3.8, 359.0], [3.9, 359.0], [4.0, 359.0], [4.1, 360.0], [4.2, 360.0], [4.3, 360.0], [4.4, 360.0], [4.5, 361.0], [4.6, 361.0], [4.7, 361.0], [4.8, 361.0], [4.9, 361.0], [5.0, 362.0], [5.1, 362.0], [5.2, 362.0], [5.3, 362.0], [5.4, 362.0], [5.5, 362.0], [5.6, 363.0], [5.7, 363.0], [5.8, 363.0], [5.9, 363.0], [6.0, 363.0], [6.1, 364.0], [6.2, 364.0], [6.3, 364.0], [6.4, 364.0], [6.5, 364.0], [6.6, 364.0], [6.7, 365.0], [6.8, 365.0], [6.9, 365.0], [7.0, 365.0], [7.1, 365.0], [7.2, 365.0], [7.3, 365.0], [7.4, 366.0], [7.5, 366.0], [7.6, 366.0], [7.7, 366.0], [7.8, 366.0], [7.9, 366.0], [8.0, 366.0], [8.1, 367.0], [8.2, 367.0], [8.3, 367.0], [8.4, 367.0], [8.5, 367.0], [8.6, 367.0], [8.7, 367.0], [8.8, 367.0], [8.9, 368.0], [9.0, 368.0], [9.1, 368.0], [9.2, 368.0], [9.3, 368.0], [9.4, 368.0], [9.5, 368.0], [9.6, 368.0], [9.7, 368.0], [9.8, 369.0], [9.9, 369.0], [10.0, 369.0], [10.1, 369.0], [10.2, 369.0], [10.3, 369.0], [10.4, 369.0], [10.5, 369.0], [10.6, 369.0], [10.7, 369.0], [10.8, 370.0], [10.9, 370.0], [11.0, 370.0], [11.1, 370.0], [11.2, 370.0], [11.3, 370.0], [11.4, 370.0], [11.5, 370.0], [11.6, 370.0], [11.7, 371.0], [11.8, 371.0], [11.9, 371.0], [12.0, 371.0], [12.1, 371.0], [12.2, 371.0], [12.3, 371.0], [12.4, 371.0], [12.5, 371.0], [12.6, 371.0], [12.7, 371.0], [12.8, 372.0], [12.9, 372.0], [13.0, 372.0], [13.1, 372.0], [13.2, 372.0], [13.3, 372.0], [13.4, 372.0], [13.5, 372.0], [13.6, 372.0], [13.7, 372.0], [13.8, 372.0], [13.9, 373.0], [14.0, 373.0], [14.1, 373.0], [14.2, 373.0], [14.3, 373.0], [14.4, 373.0], [14.5, 373.0], [14.6, 373.0], [14.7, 373.0], [14.8, 373.0], [14.9, 373.0], [15.0, 373.0], [15.1, 373.0], [15.2, 374.0], [15.3, 374.0], [15.4, 374.0], [15.5, 374.0], [15.6, 374.0], [15.7, 374.0], [15.8, 374.0], [15.9, 374.0], [16.0, 374.0], [16.1, 374.0], [16.2, 374.0], [16.3, 374.0], [16.4, 374.0], [16.5, 375.0], [16.6, 375.0], [16.7, 375.0], [16.8, 375.0], [16.9, 375.0], [17.0, 375.0], [17.1, 375.0], [17.2, 375.0], [17.3, 375.0], [17.4, 375.0], [17.5, 375.0], [17.6, 375.0], [17.7, 375.0], [17.8, 376.0], [17.9, 376.0], [18.0, 376.0], [18.1, 376.0], [18.2, 376.0], [18.3, 376.0], [18.4, 376.0], [18.5, 376.0], [18.6, 376.0], [18.7, 376.0], [18.8, 376.0], [18.9, 376.0], [19.0, 376.0], [19.1, 376.0], [19.2, 376.0], [19.3, 377.0], [19.4, 377.0], [19.5, 377.0], [19.6, 377.0], [19.7, 377.0], [19.8, 377.0], [19.9, 377.0], [20.0, 377.0], [20.1, 377.0], [20.2, 377.0], [20.3, 377.0], [20.4, 377.0], [20.5, 377.0], [20.6, 377.0], [20.7, 378.0], [20.8, 378.0], [20.9, 378.0], [21.0, 378.0], [21.1, 378.0], [21.2, 378.0], [21.3, 378.0], [21.4, 378.0], [21.5, 378.0], [21.6, 378.0], [21.7, 378.0], [21.8, 378.0], [21.9, 378.0], [22.0, 378.0], [22.1, 378.0], [22.2, 378.0], [22.3, 379.0], [22.4, 379.0], [22.5, 379.0], [22.6, 379.0], [22.7, 379.0], [22.8, 379.0], [22.9, 379.0], [23.0, 379.0], [23.1, 379.0], [23.2, 379.0], [23.3, 379.0], [23.4, 379.0], [23.5, 379.0], [23.6, 379.0], [23.7, 379.0], [23.8, 379.0], [23.9, 380.0], [24.0, 380.0], [24.1, 380.0], [24.2, 380.0], [24.3, 380.0], [24.4, 380.0], [24.5, 380.0], [24.6, 380.0], [24.7, 380.0], [24.8, 380.0], [24.9, 380.0], [25.0, 380.0], [25.1, 380.0], [25.2, 380.0], [25.3, 380.0], [25.4, 380.0], [25.5, 380.0], [25.6, 381.0], [25.7, 381.0], [25.8, 381.0], [25.9, 381.0], [26.0, 381.0], [26.1, 381.0], [26.2, 381.0], [26.3, 381.0], [26.4, 381.0], [26.5, 381.0], [26.6, 381.0], [26.7, 381.0], [26.8, 381.0], [26.9, 381.0], [27.0, 381.0], [27.1, 381.0], [27.2, 381.0], [27.3, 381.0], [27.4, 382.0], [27.5, 382.0], [27.6, 382.0], [27.7, 382.0], [27.8, 382.0], [27.9, 382.0], [28.0, 382.0], [28.1, 382.0], [28.2, 382.0], [28.3, 382.0], [28.4, 382.0], [28.5, 382.0], [28.6, 382.0], [28.7, 382.0], [28.8, 382.0], [28.9, 382.0], [29.0, 382.0], [29.1, 382.0], [29.2, 383.0], [29.3, 383.0], [29.4, 383.0], [29.5, 383.0], [29.6, 383.0], [29.7, 383.0], [29.8, 383.0], [29.9, 383.0], [30.0, 383.0], [30.1, 383.0], [30.2, 383.0], [30.3, 383.0], [30.4, 383.0], [30.5, 383.0], [30.6, 383.0], [30.7, 383.0], [30.8, 383.0], [30.9, 383.0], [31.0, 384.0], [31.1, 384.0], [31.2, 384.0], [31.3, 384.0], [31.4, 384.0], [31.5, 384.0], [31.6, 384.0], [31.7, 384.0], [31.8, 384.0], [31.9, 384.0], [32.0, 384.0], [32.1, 384.0], [32.2, 384.0], [32.3, 384.0], [32.4, 384.0], [32.5, 384.0], [32.6, 384.0], [32.7, 384.0], [32.8, 384.0], [32.9, 385.0], [33.0, 385.0], [33.1, 385.0], [33.2, 385.0], [33.3, 385.0], [33.4, 385.0], [33.5, 385.0], [33.6, 385.0], [33.7, 385.0], [33.8, 385.0], [33.9, 385.0], [34.0, 385.0], [34.1, 385.0], [34.2, 385.0], [34.3, 385.0], [34.4, 385.0], [34.5, 385.0], [34.6, 385.0], [34.7, 385.0], [34.8, 386.0], [34.9, 386.0], [35.0, 386.0], [35.1, 386.0], [35.2, 386.0], [35.3, 386.0], [35.4, 386.0], [35.5, 386.0], [35.6, 386.0], [35.7, 386.0], [35.8, 386.0], [35.9, 386.0], [36.0, 386.0], [36.1, 386.0], [36.2, 386.0], [36.3, 386.0], [36.4, 386.0], [36.5, 386.0], [36.6, 386.0], [36.7, 386.0], [36.8, 387.0], [36.9, 387.0], [37.0, 387.0], [37.1, 387.0], [37.2, 387.0], [37.3, 387.0], [37.4, 387.0], [37.5, 387.0], [37.6, 387.0], [37.7, 387.0], [37.8, 387.0], [37.9, 387.0], [38.0, 387.0], [38.1, 387.0], [38.2, 387.0], [38.3, 387.0], [38.4, 387.0], [38.5, 387.0], [38.6, 387.0], [38.7, 388.0], [38.8, 388.0], [38.9, 388.0], [39.0, 388.0], [39.1, 388.0], [39.2, 388.0], [39.3, 388.0], [39.4, 388.0], [39.5, 388.0], [39.6, 388.0], [39.7, 388.0], [39.8, 388.0], [39.9, 388.0], [40.0, 388.0], [40.1, 388.0], [40.2, 388.0], [40.3, 388.0], [40.4, 388.0], [40.5, 388.0], [40.6, 389.0], [40.7, 389.0], [40.8, 389.0], [40.9, 389.0], [41.0, 389.0], [41.1, 389.0], [41.2, 389.0], [41.3, 389.0], [41.4, 389.0], [41.5, 389.0], [41.6, 389.0], [41.7, 389.0], [41.8, 389.0], [41.9, 389.0], [42.0, 389.0], [42.1, 389.0], [42.2, 389.0], [42.3, 389.0], [42.4, 389.0], [42.5, 390.0], [42.6, 390.0], [42.7, 390.0], [42.8, 390.0], [42.9, 390.0], [43.0, 390.0], [43.1, 390.0], [43.2, 390.0], [43.3, 390.0], [43.4, 390.0], [43.5, 390.0], [43.6, 390.0], [43.7, 390.0], [43.8, 390.0], [43.9, 390.0], [44.0, 390.0], [44.1, 390.0], [44.2, 390.0], [44.3, 390.0], [44.4, 390.0], [44.5, 391.0], [44.6, 391.0], [44.7, 391.0], [44.8, 391.0], [44.9, 391.0], [45.0, 391.0], [45.1, 391.0], [45.2, 391.0], [45.3, 391.0], [45.4, 391.0], [45.5, 391.0], [45.6, 391.0], [45.7, 391.0], [45.8, 391.0], [45.9, 391.0], [46.0, 391.0], [46.1, 391.0], [46.2, 391.0], [46.3, 391.0], [46.4, 392.0], [46.5, 392.0], [46.6, 392.0], [46.7, 392.0], [46.8, 392.0], [46.9, 392.0], [47.0, 392.0], [47.1, 392.0], [47.2, 392.0], [47.3, 392.0], [47.4, 392.0], [47.5, 392.0], [47.6, 392.0], [47.7, 392.0], [47.8, 392.0], [47.9, 392.0], [48.0, 392.0], [48.1, 392.0], [48.2, 392.0], [48.3, 393.0], [48.4, 393.0], [48.5, 393.0], [48.6, 393.0], [48.7, 393.0], [48.8, 393.0], [48.9, 393.0], [49.0, 393.0], [49.1, 393.0], [49.2, 393.0], [49.3, 393.0], [49.4, 393.0], [49.5, 393.0], [49.6, 393.0], [49.7, 393.0], [49.8, 393.0], [49.9, 393.0], [50.0, 393.0], [50.1, 393.0], [50.2, 394.0], [50.3, 394.0], [50.4, 394.0], [50.5, 394.0], [50.6, 394.0], [50.7, 394.0], [50.8, 394.0], [50.9, 394.0], [51.0, 394.0], [51.1, 394.0], [51.2, 394.0], [51.3, 394.0], [51.4, 394.0], [51.5, 394.0], [51.6, 394.0], [51.7, 394.0], [51.8, 394.0], [51.9, 394.0], [52.0, 394.0], [52.1, 395.0], [52.2, 395.0], [52.3, 395.0], [52.4, 395.0], [52.5, 395.0], [52.6, 395.0], [52.7, 395.0], [52.8, 395.0], [52.9, 395.0], [53.0, 395.0], [53.1, 395.0], [53.2, 395.0], [53.3, 395.0], [53.4, 395.0], [53.5, 395.0], [53.6, 395.0], [53.7, 395.0], [53.8, 395.0], [53.9, 396.0], [54.0, 396.0], [54.1, 396.0], [54.2, 396.0], [54.3, 396.0], [54.4, 396.0], [54.5, 396.0], [54.6, 396.0], [54.7, 396.0], [54.8, 396.0], [54.9, 396.0], [55.0, 396.0], [55.1, 396.0], [55.2, 396.0], [55.3, 396.0], [55.4, 396.0], [55.5, 396.0], [55.6, 396.0], [55.7, 397.0], [55.8, 397.0], [55.9, 397.0], [56.0, 397.0], [56.1, 397.0], [56.2, 397.0], [56.3, 397.0], [56.4, 397.0], [56.5, 397.0], [56.6, 397.0], [56.7, 397.0], [56.8, 397.0], [56.9, 397.0], [57.0, 397.0], [57.1, 397.0], [57.2, 397.0], [57.3, 397.0], [57.4, 398.0], [57.5, 398.0], [57.6, 398.0], [57.7, 398.0], [57.8, 398.0], [57.9, 398.0], [58.0, 398.0], [58.1, 398.0], [58.2, 398.0], [58.3, 398.0], [58.4, 398.0], [58.5, 398.0], [58.6, 398.0], [58.7, 398.0], [58.8, 398.0], [58.9, 398.0], [59.0, 398.0], [59.1, 399.0], [59.2, 399.0], [59.3, 399.0], [59.4, 399.0], [59.5, 399.0], [59.6, 399.0], [59.7, 399.0], [59.8, 399.0], [59.9, 399.0], [60.0, 399.0], [60.1, 399.0], [60.2, 399.0], [60.3, 399.0], [60.4, 399.0], [60.5, 399.0], [60.6, 399.0], [60.7, 399.0], [60.8, 400.0], [60.9, 400.0], [61.0, 400.0], [61.1, 400.0], [61.2, 400.0], [61.3, 400.0], [61.4, 400.0], [61.5, 400.0], [61.6, 400.0], [61.7, 400.0], [61.8, 400.0], [61.9, 400.0], [62.0, 400.0], [62.1, 400.0], [62.2, 400.0], [62.3, 401.0], [62.4, 401.0], [62.5, 401.0], [62.6, 401.0], [62.7, 401.0], [62.8, 401.0], [62.9, 401.0], [63.0, 401.0], [63.1, 401.0], [63.2, 401.0], [63.3, 401.0], [63.4, 401.0], [63.5, 401.0], [63.6, 401.0], [63.7, 401.0], [63.8, 402.0], [63.9, 402.0], [64.0, 402.0], [64.1, 402.0], [64.2, 402.0], [64.3, 402.0], [64.4, 402.0], [64.5, 402.0], [64.6, 402.0], [64.7, 402.0], [64.8, 402.0], [64.9, 402.0], [65.0, 402.0], [65.1, 402.0], [65.2, 403.0], [65.3, 403.0], [65.4, 403.0], [65.5, 403.0], [65.6, 403.0], [65.7, 403.0], [65.8, 403.0], [65.9, 403.0], [66.0, 403.0], [66.1, 403.0], [66.2, 403.0], [66.3, 403.0], [66.4, 403.0], [66.5, 403.0], [66.6, 404.0], [66.7, 404.0], [66.8, 404.0], [66.9, 404.0], [67.0, 404.0], [67.1, 404.0], [67.2, 404.0], [67.3, 404.0], [67.4, 404.0], [67.5, 404.0], [67.6, 404.0], [67.7, 404.0], [67.8, 404.0], [67.9, 404.0], [68.0, 405.0], [68.1, 405.0], [68.2, 405.0], [68.3, 405.0], [68.4, 405.0], [68.5, 405.0], [68.6, 405.0], [68.7, 405.0], [68.8, 405.0], [68.9, 405.0], [69.0, 405.0], [69.1, 405.0], [69.2, 406.0], [69.3, 406.0], [69.4, 406.0], [69.5, 406.0], [69.6, 406.0], [69.7, 406.0], [69.8, 406.0], [69.9, 406.0], [70.0, 406.0], [70.1, 406.0], [70.2, 406.0], [70.3, 406.0], [70.4, 406.0], [70.5, 407.0], [70.6, 407.0], [70.7, 407.0], [70.8, 407.0], [70.9, 407.0], [71.0, 407.0], [71.1, 407.0], [71.2, 407.0], [71.3, 407.0], [71.4, 407.0], [71.5, 407.0], [71.6, 408.0], [71.7, 408.0], [71.8, 408.0], [71.9, 408.0], [72.0, 408.0], [72.1, 408.0], [72.2, 408.0], [72.3, 408.0], [72.4, 408.0], [72.5, 408.0], [72.6, 408.0], [72.7, 409.0], [72.8, 409.0], [72.9, 409.0], [73.0, 409.0], [73.1, 409.0], [73.2, 409.0], [73.3, 409.0], [73.4, 409.0], [73.5, 409.0], [73.6, 409.0], [73.7, 409.0], [73.8, 410.0], [73.9, 410.0], [74.0, 410.0], [74.1, 410.0], [74.2, 410.0], [74.3, 410.0], [74.4, 410.0], [74.5, 410.0], [74.6, 410.0], [74.7, 410.0], [74.8, 411.0], [74.9, 411.0], [75.0, 411.0], [75.1, 411.0], [75.2, 411.0], [75.3, 411.0], [75.4, 411.0], [75.5, 411.0], [75.6, 411.0], [75.7, 412.0], [75.8, 412.0], [75.9, 412.0], [76.0, 412.0], [76.1, 412.0], [76.2, 412.0], [76.3, 412.0], [76.4, 412.0], [76.5, 412.0], [76.6, 413.0], [76.7, 413.0], [76.8, 413.0], [76.9, 413.0], [77.0, 413.0], [77.1, 413.0], [77.2, 413.0], [77.3, 413.0], [77.4, 413.0], [77.5, 414.0], [77.6, 414.0], [77.7, 414.0], [77.8, 414.0], [77.9, 414.0], [78.0, 414.0], [78.1, 414.0], [78.2, 414.0], [78.3, 415.0], [78.4, 415.0], [78.5, 415.0], [78.6, 415.0], [78.7, 415.0], [78.8, 415.0], [78.9, 415.0], [79.0, 415.0], [79.1, 416.0], [79.2, 416.0], [79.3, 416.0], [79.4, 416.0], [79.5, 416.0], [79.6, 416.0], [79.7, 416.0], [79.8, 417.0], [79.9, 417.0], [80.0, 417.0], [80.1, 417.0], [80.2, 417.0], [80.3, 417.0], [80.4, 418.0], [80.5, 418.0], [80.6, 418.0], [80.7, 418.0], [80.8, 418.0], [80.9, 418.0], [81.0, 418.0], [81.1, 419.0], [81.2, 419.0], [81.3, 419.0], [81.4, 419.0], [81.5, 419.0], [81.6, 419.0], [81.7, 420.0], [81.8, 420.0], [81.9, 420.0], [82.0, 420.0], [82.1, 420.0], [82.2, 421.0], [82.3, 421.0], [82.4, 421.0], [82.5, 421.0], [82.6, 421.0], [82.7, 421.0], [82.8, 422.0], [82.9, 422.0], [83.0, 422.0], [83.1, 422.0], [83.2, 422.0], [83.3, 423.0], [83.4, 423.0], [83.5, 423.0], [83.6, 423.0], [83.7, 423.0], [83.8, 424.0], [83.9, 424.0], [84.0, 424.0], [84.1, 424.0], [84.2, 424.0], [84.3, 425.0], [84.4, 425.0], [84.5, 425.0], [84.6, 425.0], [84.7, 426.0], [84.8, 426.0], [84.9, 426.0], [85.0, 426.0], [85.1, 427.0], [85.2, 427.0], [85.3, 427.0], [85.4, 427.0], [85.5, 428.0], [85.6, 428.0], [85.7, 428.0], [85.8, 428.0], [85.9, 429.0], [86.0, 429.0], [86.1, 429.0], [86.2, 430.0], [86.3, 430.0], [86.4, 430.0], [86.5, 430.0], [86.6, 431.0], [86.7, 431.0], [86.8, 431.0], [86.9, 432.0], [87.0, 432.0], [87.1, 432.0], [87.2, 433.0], [87.3, 433.0], [87.4, 433.0], [87.5, 434.0], [87.6, 434.0], [87.7, 434.0], [87.8, 435.0], [87.9, 435.0], [88.0, 435.0], [88.1, 436.0], [88.2, 436.0], [88.3, 437.0], [88.4, 437.0], [88.5, 437.0], [88.6, 438.0], [88.7, 438.0], [88.8, 438.0], [88.9, 439.0], [89.0, 439.0], [89.1, 440.0], [89.2, 440.0], [89.3, 440.0], [89.4, 441.0], [89.5, 441.0], [89.6, 442.0], [89.7, 442.0], [89.8, 443.0], [89.9, 443.0], [90.0, 443.0], [90.1, 444.0], [90.2, 444.0], [90.3, 445.0], [90.4, 445.0], [90.5, 446.0], [90.6, 446.0], [90.7, 447.0], [90.8, 447.0], [90.9, 448.0], [91.0, 448.0], [91.1, 448.0], [91.2, 449.0], [91.3, 450.0], [91.4, 450.0], [91.5, 451.0], [91.6, 451.0], [91.7, 452.0], [91.8, 452.0], [91.9, 453.0], [92.0, 453.0], [92.1, 454.0], [92.2, 454.0], [92.3, 455.0], [92.4, 455.0], [92.5, 456.0], [92.6, 457.0], [92.7, 457.0], [92.8, 458.0], [92.9, 459.0], [93.0, 459.0], [93.1, 460.0], [93.2, 461.0], [93.3, 461.0], [93.4, 462.0], [93.5, 462.0], [93.6, 463.0], [93.7, 464.0], [93.8, 464.0], [93.9, 465.0], [94.0, 466.0], [94.1, 467.0], [94.2, 467.0], [94.3, 468.0], [94.4, 469.0], [94.5, 470.0], [94.6, 470.0], [94.7, 471.0], [94.8, 472.0], [94.9, 473.0], [95.0, 474.0], [95.1, 475.0], [95.2, 476.0], [95.3, 477.0], [95.4, 478.0], [95.5, 479.0], [95.6, 480.0], [95.7, 481.0], [95.8, 482.0], [95.9, 483.0], [96.0, 484.0], [96.1, 485.0], [96.2, 486.0], [96.3, 487.0], [96.4, 489.0], [96.5, 490.0], [96.6, 491.0], [96.7, 493.0], [96.8, 494.0], [96.9, 496.0], [97.0, 497.0], [97.1, 499.0], [97.2, 500.0], [97.3, 502.0], [97.4, 504.0], [97.5, 506.0], [97.6, 508.0], [97.7, 511.0], [97.8, 514.0], [97.9, 517.0], [98.0, 520.0], [98.1, 524.0], [98.2, 527.0], [98.3, 530.0], [98.4, 534.0], [98.5, 539.0], [98.6, 546.0], [98.7, 554.0], [98.8, 562.0], [98.9, 571.0], [99.0, 581.0], [99.1, 593.0], [99.2, 609.0], [99.3, 627.0], [99.4, 677.0], [99.5, 709.0], [99.6, 732.0], [99.7, 780.0], [99.8, 923.0], [99.9, 1341.0], [100.0, 2970.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 301680.0, "series": [{"data": [[0.0, 1305.0], [600.0, 1719.0], [700.0, 1146.0], [2700.0, 60.0], [2800.0, 16.0], [2900.0, 124.0], [200.0, 374.0], [800.0, 310.0], [900.0, 327.0], [1000.0, 51.0], [300.0, 301680.0], [1200.0, 11.0], [1300.0, 339.0], [100.0, 236.0], [400.0, 182109.0], [1800.0, 11.0], [1900.0, 189.0], [500.0, 9986.0], [2000.0, 7.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 407.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 486006.0, "series": [{"data": [[0.0, 486006.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13587.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 407.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.59418302E12, "maxY": 200.0, "series": [{"data": [[1.59418332E12, 200.0], [1.59418302E12, 199.4733795384723], [1.59418392E12, 200.0], [1.59418398E12, 197.0807311500383], [1.59418362E12, 200.0], [1.59418356E12, 200.0], [1.59418386E12, 200.0], [1.59418326E12, 200.0], [1.5941832E12, 200.0], [1.5941835E12, 200.0], [1.59418344E12, 200.0], [1.59418314E12, 200.0], [1.5941838E12, 200.0], [1.59418308E12, 200.0], [1.59418368E12, 200.0], [1.59418374E12, 200.0], [1.59418338E12, 200.0], [1.59418404E12, 1.0]], "isOverall": false, "label": "fabric\u5199\u6570\u636E\u6D4B\u8BD5", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59418404E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 23.5, "minX": 1.0, "maxY": 2032.0, "series": [{"data": [[3.0, 2032.0], [6.0, 2013.8], [7.0, 24.0], [8.0, 23.5], [9.0, 42.0], [10.0, 41.0], [12.0, 40.4], [13.0, 30.0], [14.0, 58.5], [15.0, 68.0], [16.0, 59.2], [17.0, 70.0], [18.0, 61.0], [19.0, 65.66666666666667], [20.0, 60.0], [21.0, 58.0], [22.0, 67.33333333333333], [24.0, 79.0], [25.0, 60.0], [26.0, 78.0], [28.0, 73.3], [30.0, 76.0], [31.0, 74.0], [33.0, 73.88888888888889], [35.0, 84.5], [34.0, 74.33333333333333], [37.0, 86.5], [36.0, 82.66666666666667], [38.0, 89.0], [41.0, 88.0], [40.0, 91.2], [43.0, 80.0], [42.0, 80.0], [44.0, 96.0], [46.0, 95.125], [49.0, 102.33333333333334], [48.0, 111.57142857142857], [51.0, 114.81818181818183], [50.0, 101.5], [53.0, 126.71428571428572], [52.0, 119.0], [57.0, 133.33333333333334], [56.0, 135.25], [59.0, 151.08333333333334], [61.0, 159.0], [60.0, 132.0], [63.0, 156.75], [67.0, 167.875], [66.0, 164.0], [65.0, 152.5], [64.0, 158.0], [68.0, 180.42857142857144], [69.0, 183.0], [70.0, 189.33333333333334], [71.0, 202.66666666666666], [75.0, 170.5], [74.0, 171.0], [73.0, 170.5], [72.0, 169.5], [76.0, 201.63636363636365], [79.0, 176.0], [78.0, 179.25], [83.0, 187.66666666666666], [81.0, 188.0], [80.0, 181.2], [84.0, 198.75], [87.0, 204.6], [86.0, 200.28571428571428], [85.0, 214.33333333333334], [91.0, 188.6], [90.0, 193.0], [89.0, 188.5], [88.0, 195.0], [95.0, 198.33333333333334], [94.0, 200.0], [93.0, 195.6], [92.0, 213.0], [98.0, 210.15384615384616], [99.0, 200.0], [96.0, 219.0], [103.0, 207.66666666666666], [102.0, 227.58333333333334], [101.0, 242.5], [100.0, 215.92857142857144], [104.0, 213.5], [106.0, 225.70000000000002], [111.0, 235.66666666666666], [110.0, 240.5], [109.0, 240.66666666666666], [108.0, 230.75], [113.0, 231.16666666666666], [115.0, 250.0], [114.0, 240.3777777777778], [112.0, 244.14285714285714], [119.0, 261.0], [118.0, 252.66666666666666], [117.0, 257.6111111111111], [123.0, 284.0], [122.0, 277.5], [121.0, 253.55555555555554], [120.0, 242.66666666666666], [124.0, 263.125], [125.0, 271.0], [127.0, 291.5], [126.0, 293.0], [130.0, 298.84999999999997], [135.0, 310.3333333333333], [134.0, 304.8], [131.0, 307.38461538461536], [129.0, 295.70588235294116], [128.0, 294.36363636363643], [139.0, 321.8275862068965], [140.0, 326.7142857142857], [141.0, 327.8333333333333], [142.0, 334.0], [143.0, 326.2], [138.0, 309.0], [137.0, 325.0], [136.0, 316.3333333333333], [151.0, 328.4], [149.0, 320.79166666666674], [148.0, 316.25], [147.0, 317.0], [146.0, 318.0], [145.0, 324.45454545454544], [153.0, 330.0588235294118], [154.0, 330.5], [159.0, 330.8], [158.0, 326.0], [156.0, 322.3333333333333], [155.0, 330.6], [152.0, 318.0], [164.0, 360.3636363636364], [165.0, 365.6], [166.0, 352.0], [167.0, 340.7], [163.0, 350.66666666666663], [162.0, 345.25], [161.0, 337.0], [160.0, 332.6666666666667], [175.0, 397.46666666666664], [174.0, 313.5], [173.0, 380.66666666666663], [172.0, 396.4814814814815], [171.0, 382.3829787234044], [170.0, 365.3888888888888], [169.0, 359.0], [168.0, 364.59999999999997], [177.0, 397.35294117647055], [179.0, 396.5833333333333], [180.0, 402.92307692307696], [183.0, 387.21428571428567], [182.0, 391.9], [181.0, 400.44444444444446], [178.0, 396.75], [176.0, 393.7333333333334], [189.0, 384.81249999999994], [190.0, 412.99999999999994], [191.0, 402.1428571428571], [188.0, 410.0], [187.0, 399.65384615384613], [186.0, 392.24999999999994], [185.0, 390.28571428571433], [184.0, 388.52631578947376], [199.0, 417.50281425891177], [198.0, 386.8], [197.0, 386.8888888888889], [196.0, 388.22891566265054], [195.0, 399.72413793103453], [194.0, 394.8], [193.0, 395.7], [192.0, 414.19607843137265], [200.0, 403.72051625550574], [1.0, 2023.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}, {"data": [[199.81186599999813, 403.4530600000048]], "isOverall": false, "label": "HTTP\u8BF7\u6C42-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4.016666666666667, "minX": 1.59418302E12, "maxY": 474704.2, "series": [{"data": [[1.59418332E12, 455917.35], [1.59418302E12, 394879.36666666664], [1.59418392E12, 457959.75], [1.59418398E12, 428831.48333333334], [1.59418362E12, 474704.2], [1.59418356E12, 468820.9666666667], [1.59418386E12, 463551.0833333333], [1.59418326E12, 448948.5], [1.5941832E12, 463565.5], [1.5941835E12, 472397.4666666667], [1.59418344E12, 466776.5833333333], [1.59418314E12, 440636.8], [1.5941838E12, 468477.76666666666], [1.59418308E12, 462126.9], [1.59418368E12, 467606.51666666666], [1.59418374E12, 467163.56666666665], [1.59418338E12, 473423.98333333334], [1.59418404E12, 15.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59418332E12, 117756.61666666667], [1.59418302E12, 101999.23333333334], [1.59418392E12, 118270.75], [1.59418398E12, 110751.55], [1.59418362E12, 122604.73333333334], [1.59418356E12, 121086.43333333333], [1.59418386E12, 119716.75], [1.59418326E12, 115961.16666666667], [1.5941832E12, 119736.83333333333], [1.5941835E12, 122010.26666666666], [1.59418344E12, 120560.25], [1.59418314E12, 113816.26666666666], [1.5941838E12, 120990.03333333334], [1.59418308E12, 119367.3], [1.59418368E12, 120769.11666666667], [1.59418374E12, 120652.63333333333], [1.59418338E12, 122279.38333333333], [1.59418404E12, 4.016666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59418404E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 393.051303892018, "minX": 1.59418302E12, "maxY": 2023.0, "series": [{"data": [[1.59418332E12, 409.1408056758876], [1.59418302E12, 404.25387886902615], [1.59418392E12, 407.19792834097285], [1.59418398E12, 417.23979980415817], [1.59418362E12, 393.051303892018], [1.59418356E12, 397.9909109002829], [1.59418386E12, 402.83113571548705], [1.59418326E12, 415.0930377554562], [1.5941832E12, 402.55437772559515], [1.5941835E12, 395.0055636028461], [1.59418344E12, 399.77937697817276], [1.59418314E12, 423.4391233766241], [1.5941838E12, 398.1499236438478], [1.59418308E12, 403.69860017497774], [1.59418368E12, 398.7722752519403], [1.59418374E12, 399.7737865370526], [1.59418338E12, 394.1429885359535], [1.59418404E12, 2023.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59418404E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 393.04923994234036, "minX": 1.59418302E12, "maxY": 2023.0, "series": [{"data": [[1.59418332E12, 409.13872497185946], [1.59418302E12, 404.24978341340477], [1.59418392E12, 407.19592460519834], [1.59418398E12, 417.23766002974065], [1.59418362E12, 393.04923994234036], [1.59418356E12, 397.98855569561647], [1.59418386E12, 402.82888777050783], [1.59418326E12, 415.09116730169717], [1.5941832E12, 402.55219724924484], [1.5941835E12, 395.0033908348708], [1.59418344E12, 399.7771114442766], [1.59418314E12, 423.43679418407805], [1.5941838E12, 398.14803133922004], [1.59418308E12, 403.69671579514034], [1.59418368E12, 398.7700468952626], [1.59418374E12, 399.7717890671804], [1.59418338E12, 394.1411818808912], [1.59418404E12, 2023.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59418404E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.59418302E12, "maxY": 0.03465385524139574, "series": [{"data": [[1.59418332E12, 0.003308660504144401], [1.59418302E12, 0.03465385524139574], [1.59418392E12, 0.0036678553234844417], [1.59418398E12, 0.0037718057520037813], [1.59418362E12, 0.0033088717075088277], [1.59418356E12, 0.00311815829629138], [1.59418386E12, 0.0030196275792651953], [1.59418326E12, 0.0038794596466921074], [1.5941832E12, 0.0035223079503522645], [1.5941835E12, 0.0031603897814063784], [1.59418344E12, 0.0034649341995668845], [1.59418314E12, 0.0035643704121965016], [1.5941838E12, 0.004050195870128202], [1.59418308E12, 0.004071606433811156], [1.59418368E12, 0.0037250141350983258], [1.59418374E12, 0.0032292429589187524], [1.59418338E12, 0.004533061787603032], [1.59418404E12, 0.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59418404E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.59418302E12, "maxY": 2970.0, "series": [{"data": [[1.59418332E12, 1385.0], [1.59418302E12, 1075.0], [1.59418392E12, 725.0], [1.59418398E12, 2032.0], [1.59418362E12, 622.0], [1.59418356E12, 598.0], [1.59418386E12, 907.0], [1.59418326E12, 959.0], [1.5941832E12, 1353.0], [1.5941835E12, 610.0], [1.59418344E12, 642.0], [1.59418314E12, 2970.0], [1.5941838E12, 566.0], [1.59418308E12, 692.0], [1.59418368E12, 760.0], [1.59418374E12, 568.0], [1.59418338E12, 593.0], [1.59418404E12, 2023.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59418332E12, 345.0], [1.59418302E12, 342.0], [1.59418392E12, 349.0], [1.59418398E12, 100.0], [1.59418362E12, 342.0], [1.59418356E12, 347.0], [1.59418386E12, 351.0], [1.59418326E12, 315.00899523139003], [1.5941832E12, 342.0], [1.5941835E12, 343.00899523139003], [1.59418344E12, 342.0], [1.59418314E12, 345.0], [1.5941838E12, 328.0], [1.59418308E12, 347.0], [1.59418368E12, 344.0], [1.59418374E12, 350.0], [1.59418338E12, 348.0], [1.59418404E12, 2023.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59418332E12, 346.0], [1.59418302E12, 343.0], [1.59418392E12, 351.0], [1.59418398E12, 121.0], [1.59418362E12, 343.0], [1.59418356E12, 348.0], [1.59418386E12, 353.0], [1.59418326E12, 323.0], [1.5941832E12, 342.0], [1.5941835E12, 345.0], [1.59418344E12, 343.0], [1.59418314E12, 345.0], [1.5941838E12, 332.00990190744403], [1.59418308E12, 348.0], [1.59418368E12, 344.0], [1.59418374E12, 350.0], [1.59418338E12, 349.0], [1.59418404E12, 2023.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59418332E12, 346.0], [1.59418302E12, 343.0], [1.59418392E12, 350.0], [1.59418398E12, 112.00949761569498], [1.59418362E12, 343.0], [1.59418356E12, 347.0], [1.59418386E12, 352.0], [1.59418326E12, 319.0], [1.5941832E12, 342.0], [1.5941835E12, 344.0], [1.59418344E12, 342.0], [1.59418314E12, 345.0], [1.5941838E12, 332.0], [1.59418308E12, 348.0], [1.59418368E12, 344.0], [1.59418374E12, 350.0], [1.59418338E12, 348.0], [1.59418404E12, 2023.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59418332E12, 5.0], [1.59418302E12, 8.0], [1.59418392E12, 4.0], [1.59418398E12, 6.0], [1.59418362E12, 4.0], [1.59418356E12, 4.0], [1.59418386E12, 4.0], [1.59418326E12, 5.0], [1.5941832E12, 5.0], [1.5941835E12, 4.0], [1.59418344E12, 4.0], [1.59418314E12, 5.0], [1.5941838E12, 5.0], [1.59418308E12, 6.0], [1.59418368E12, 5.0], [1.59418374E12, 5.0], [1.59418338E12, 5.0], [1.59418404E12, 2023.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59418332E12, 390.0], [1.59418302E12, 393.0], [1.59418392E12, 397.0], [1.59418398E12, 414.0], [1.59418362E12, 386.0], [1.59418356E12, 390.0], [1.59418386E12, 394.0], [1.59418326E12, 402.0], [1.5941832E12, 390.0], [1.5941835E12, 392.0], [1.59418344E12, 389.0], [1.59418314E12, 391.0], [1.5941838E12, 394.0], [1.59418308E12, 389.0], [1.59418368E12, 389.0], [1.59418374E12, 395.0], [1.59418338E12, 388.0], [1.59418404E12, 2023.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59418404E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 290.5, "minX": 1.0, "maxY": 2905.5, "series": [{"data": [[6.0, 2010.0], [10.0, 372.0], [150.0, 1331.5], [180.0, 388.0], [190.0, 290.5], [228.0, 2905.5], [250.0, 890.5], [270.0, 932.5], [300.0, 1907.0], [294.0, 403.0], [327.0, 512.0], [321.0, 532.0], [350.0, 716.0], [340.0, 678.0], [356.0, 373.0], [361.0, 466.0], [355.0, 534.0], [363.0, 486.0], [362.0, 668.5], [371.0, 412.0], [380.0, 389.0], [382.0, 488.5], [373.0, 519.0], [391.0, 445.0], [390.0, 533.5], [393.0, 494.0], [398.0, 524.0], [395.0, 503.0], [404.0, 477.5], [410.0, 468.0], [400.0, 394.0], [412.0, 470.0], [409.0, 497.0], [411.0, 507.0], [414.0, 502.0], [401.0, 478.0], [425.0, 460.0], [430.0, 464.0], [427.0, 471.0], [431.0, 466.0], [421.0, 466.0], [422.0, 465.0], [420.0, 470.0], [429.0, 489.0], [440.0, 422.0], [441.0, 447.0], [432.0, 439.0], [442.0, 455.0], [437.0, 469.0], [433.0, 461.0], [443.0, 443.5], [444.0, 450.5], [434.0, 478.0], [450.0, 449.0], [460.0, 417.0], [459.0, 422.0], [463.0, 409.0], [457.0, 423.0], [461.0, 413.0], [451.0, 440.0], [449.0, 438.0], [448.0, 443.0], [452.0, 461.0], [453.0, 447.0], [454.0, 450.0], [462.0, 440.0], [465.0, 417.0], [470.0, 414.0], [474.0, 421.0], [471.0, 419.0], [467.0, 424.0], [475.0, 413.0], [464.0, 405.0], [472.0, 410.0], [473.0, 419.0], [478.0, 406.0], [493.0, 399.0], [481.0, 415.0], [490.0, 404.0], [495.0, 400.0], [488.0, 402.0], [494.0, 405.0], [480.0, 409.0], [487.0, 417.0], [486.0, 412.0], [483.0, 413.0], [484.0, 415.0], [485.0, 396.0], [482.0, 415.0], [491.0, 403.0], [492.0, 407.0], [508.0, 393.0], [510.0, 391.0], [509.0, 400.0], [500.0, 396.0], [501.0, 400.0], [511.0, 391.0], [504.0, 398.0], [505.0, 391.0], [503.0, 396.0], [498.0, 401.0], [499.0, 394.0], [496.0, 402.0], [502.0, 398.0], [507.0, 389.0], [506.0, 393.0], [517.0, 389.0], [519.0, 387.0], [520.0, 386.0], [540.0, 373.0], [536.0, 380.0], [538.0, 372.0], [539.0, 380.0], [541.0, 375.0], [530.0, 379.0], [529.0, 378.0], [543.0, 376.0], [528.0, 384.0], [531.0, 381.0], [532.0, 378.0], [533.0, 377.0], [535.0, 377.0], [534.0, 374.0], [518.0, 385.0], [542.0, 369.0], [521.0, 385.0], [513.0, 391.0], [514.0, 390.0], [515.0, 390.0], [516.0, 391.0], [512.0, 391.0], [525.0, 387.0], [527.0, 385.0], [526.0, 382.0], [524.0, 386.0], [522.0, 386.0], [523.0, 384.0], [549.0, 366.0], [550.0, 372.0], [551.0, 360.0], [560.0, 365.0], [544.0, 373.0], [1.0, 2023.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 560.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 290.5, "minX": 1.0, "maxY": 2905.5, "series": [{"data": [[6.0, 2010.0], [10.0, 372.0], [150.0, 1331.5], [180.0, 388.0], [190.0, 290.5], [228.0, 2905.5], [250.0, 890.5], [270.0, 932.5], [300.0, 1907.0], [294.0, 403.0], [327.0, 512.0], [321.0, 532.0], [350.0, 716.0], [340.0, 678.0], [356.0, 373.0], [361.0, 466.0], [355.0, 534.0], [363.0, 486.0], [362.0, 668.5], [371.0, 412.0], [380.0, 389.0], [382.0, 488.5], [373.0, 519.0], [391.0, 445.0], [390.0, 533.5], [393.0, 494.0], [398.0, 524.0], [395.0, 503.0], [404.0, 477.5], [410.0, 468.0], [400.0, 394.0], [412.0, 470.0], [409.0, 497.0], [411.0, 507.0], [414.0, 502.0], [401.0, 478.0], [425.0, 460.0], [430.0, 464.0], [427.0, 471.0], [431.0, 466.0], [421.0, 466.0], [422.0, 465.0], [420.0, 470.0], [429.0, 489.0], [440.0, 422.0], [441.0, 447.0], [432.0, 439.0], [442.0, 455.0], [437.0, 469.0], [433.0, 461.0], [443.0, 443.5], [444.0, 450.5], [434.0, 478.0], [450.0, 449.0], [460.0, 417.0], [459.0, 422.0], [463.0, 409.0], [457.0, 423.0], [461.0, 413.0], [451.0, 440.0], [449.0, 438.0], [448.0, 443.0], [452.0, 461.0], [453.0, 447.0], [454.0, 450.0], [462.0, 440.0], [465.0, 417.0], [470.0, 414.0], [474.0, 421.0], [471.0, 419.0], [467.0, 424.0], [475.0, 413.0], [464.0, 405.0], [472.0, 410.0], [473.0, 419.0], [478.0, 406.0], [493.0, 399.0], [481.0, 415.0], [490.0, 404.0], [495.0, 400.0], [488.0, 402.0], [494.0, 405.0], [480.0, 409.0], [487.0, 417.0], [486.0, 412.0], [483.0, 413.0], [484.0, 415.0], [485.0, 396.0], [482.0, 415.0], [491.0, 403.0], [492.0, 407.0], [508.0, 393.0], [510.0, 391.0], [509.0, 400.0], [500.0, 396.0], [501.0, 400.0], [511.0, 391.0], [504.0, 398.0], [505.0, 391.0], [503.0, 396.0], [498.0, 401.0], [499.0, 394.0], [496.0, 402.0], [502.0, 398.0], [507.0, 389.0], [506.0, 393.0], [517.0, 389.0], [519.0, 387.0], [520.0, 386.0], [540.0, 373.0], [536.0, 380.0], [538.0, 372.0], [539.0, 380.0], [541.0, 375.0], [530.0, 379.0], [529.0, 378.0], [543.0, 376.0], [528.0, 384.0], [531.0, 381.0], [532.0, 378.0], [533.0, 377.0], [535.0, 377.0], [534.0, 374.0], [518.0, 385.0], [542.0, 369.0], [521.0, 385.0], [513.0, 391.0], [514.0, 390.0], [515.0, 390.0], [516.0, 391.0], [512.0, 391.0], [525.0, 387.0], [527.0, 385.0], [526.0, 382.0], [524.0, 386.0], [522.0, 386.0], [523.0, 384.0], [549.0, 366.0], [550.0, 372.0], [551.0, 360.0], [560.0, 365.0], [544.0, 373.0], [1.0, 2023.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 560.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 426.56666666666666, "minX": 1.59418302E12, "maxY": 508.73333333333335, "series": [{"data": [[1.59418332E12, 488.6166666666667], [1.59418302E12, 426.56666666666666], [1.59418392E12, 490.75], [1.59418398E12, 456.23333333333335], [1.59418362E12, 508.73333333333335], [1.59418356E12, 502.43333333333334], [1.59418386E12, 496.75], [1.59418326E12, 481.1666666666667], [1.5941832E12, 496.8333333333333], [1.5941835E12, 506.26666666666665], [1.59418344E12, 500.25], [1.59418314E12, 472.26666666666665], [1.5941838E12, 502.03333333333336], [1.59418308E12, 495.3], [1.59418368E12, 501.1166666666667], [1.59418374E12, 500.6333333333333], [1.59418338E12, 507.3833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59418398E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59418302E12, "maxY": 508.73333333333335, "series": [{"data": [[1.59418332E12, 488.6166666666667], [1.59418302E12, 423.23333333333335], [1.59418392E12, 490.75], [1.59418398E12, 459.55], [1.59418362E12, 508.73333333333335], [1.59418356E12, 502.43333333333334], [1.59418386E12, 496.75], [1.59418326E12, 481.1666666666667], [1.5941832E12, 496.8333333333333], [1.5941835E12, 506.26666666666665], [1.59418344E12, 500.25], [1.59418314E12, 472.26666666666665], [1.5941838E12, 502.03333333333336], [1.59418308E12, 495.3], [1.59418368E12, 501.1166666666667], [1.59418374E12, 500.6333333333333], [1.59418338E12, 507.3833333333333], [1.59418404E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59418404E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59418302E12, "maxY": 508.73333333333335, "series": [{"data": [[1.59418332E12, 488.6166666666667], [1.59418302E12, 423.23333333333335], [1.59418392E12, 490.75], [1.59418398E12, 459.55], [1.59418362E12, 508.73333333333335], [1.59418356E12, 502.43333333333334], [1.59418386E12, 496.75], [1.59418326E12, 481.1666666666667], [1.5941832E12, 496.8333333333333], [1.5941835E12, 506.26666666666665], [1.59418344E12, 500.25], [1.59418314E12, 472.26666666666665], [1.5941838E12, 502.03333333333336], [1.59418308E12, 495.3], [1.59418368E12, 501.1166666666667], [1.59418374E12, 500.6333333333333], [1.59418338E12, 507.3833333333333], [1.59418404E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP\u8BF7\u6C42-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59418404E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.59418302E12, "maxY": 508.73333333333335, "series": [{"data": [[1.59418332E12, 488.6166666666667], [1.59418302E12, 423.23333333333335], [1.59418392E12, 490.75], [1.59418398E12, 459.55], [1.59418362E12, 508.73333333333335], [1.59418356E12, 502.43333333333334], [1.59418386E12, 496.75], [1.59418326E12, 481.1666666666667], [1.5941832E12, 496.8333333333333], [1.5941835E12, 506.26666666666665], [1.59418344E12, 500.25], [1.59418314E12, 472.26666666666665], [1.5941838E12, 502.03333333333336], [1.59418308E12, 495.3], [1.59418368E12, 501.1166666666667], [1.59418374E12, 500.6333333333333], [1.59418338E12, 507.3833333333333], [1.59418404E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59418404E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

