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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 2045.0, "series": [{"data": [[0.0, 3.0], [0.1, 11.0], [0.2, 17.0], [0.3, 48.0], [0.4, 59.0], [0.5, 62.0], [0.6, 65.0], [0.7, 66.0], [0.8, 67.0], [0.9, 68.0], [1.0, 69.0], [1.1, 70.0], [1.2, 71.0], [1.3, 71.0], [1.4, 72.0], [1.5, 72.0], [1.6, 73.0], [1.7, 73.0], [1.8, 74.0], [1.9, 74.0], [2.0, 74.0], [2.1, 75.0], [2.2, 75.0], [2.3, 75.0], [2.4, 76.0], [2.5, 76.0], [2.6, 76.0], [2.7, 76.0], [2.8, 77.0], [2.9, 77.0], [3.0, 77.0], [3.1, 77.0], [3.2, 77.0], [3.3, 78.0], [3.4, 78.0], [3.5, 78.0], [3.6, 78.0], [3.7, 78.0], [3.8, 79.0], [3.9, 79.0], [4.0, 79.0], [4.1, 79.0], [4.2, 79.0], [4.3, 80.0], [4.4, 80.0], [4.5, 80.0], [4.6, 80.0], [4.7, 80.0], [4.8, 80.0], [4.9, 80.0], [5.0, 81.0], [5.1, 81.0], [5.2, 81.0], [5.3, 81.0], [5.4, 81.0], [5.5, 81.0], [5.6, 81.0], [5.7, 82.0], [5.8, 82.0], [5.9, 82.0], [6.0, 82.0], [6.1, 82.0], [6.2, 82.0], [6.3, 82.0], [6.4, 82.0], [6.5, 83.0], [6.6, 83.0], [6.7, 83.0], [6.8, 83.0], [6.9, 83.0], [7.0, 83.0], [7.1, 83.0], [7.2, 83.0], [7.3, 83.0], [7.4, 83.0], [7.5, 84.0], [7.6, 84.0], [7.7, 84.0], [7.8, 84.0], [7.9, 84.0], [8.0, 84.0], [8.1, 84.0], [8.2, 84.0], [8.3, 84.0], [8.4, 84.0], [8.5, 84.0], [8.6, 85.0], [8.7, 85.0], [8.8, 85.0], [8.9, 85.0], [9.0, 85.0], [9.1, 85.0], [9.2, 85.0], [9.3, 85.0], [9.4, 85.0], [9.5, 85.0], [9.6, 85.0], [9.7, 85.0], [9.8, 86.0], [9.9, 86.0], [10.0, 86.0], [10.1, 86.0], [10.2, 86.0], [10.3, 86.0], [10.4, 86.0], [10.5, 86.0], [10.6, 86.0], [10.7, 86.0], [10.8, 86.0], [10.9, 86.0], [11.0, 86.0], [11.1, 86.0], [11.2, 87.0], [11.3, 87.0], [11.4, 87.0], [11.5, 87.0], [11.6, 87.0], [11.7, 87.0], [11.8, 87.0], [11.9, 87.0], [12.0, 87.0], [12.1, 87.0], [12.2, 87.0], [12.3, 87.0], [12.4, 87.0], [12.5, 87.0], [12.6, 87.0], [12.7, 87.0], [12.8, 88.0], [12.9, 88.0], [13.0, 88.0], [13.1, 88.0], [13.2, 88.0], [13.3, 88.0], [13.4, 88.0], [13.5, 88.0], [13.6, 88.0], [13.7, 88.0], [13.8, 88.0], [13.9, 88.0], [14.0, 88.0], [14.1, 88.0], [14.2, 88.0], [14.3, 88.0], [14.4, 88.0], [14.5, 88.0], [14.6, 89.0], [14.7, 89.0], [14.8, 89.0], [14.9, 89.0], [15.0, 89.0], [15.1, 89.0], [15.2, 89.0], [15.3, 89.0], [15.4, 89.0], [15.5, 89.0], [15.6, 89.0], [15.7, 89.0], [15.8, 89.0], [15.9, 89.0], [16.0, 89.0], [16.1, 89.0], [16.2, 89.0], [16.3, 89.0], [16.4, 89.0], [16.5, 90.0], [16.6, 90.0], [16.7, 90.0], [16.8, 90.0], [16.9, 90.0], [17.0, 90.0], [17.1, 90.0], [17.2, 90.0], [17.3, 90.0], [17.4, 90.0], [17.5, 90.0], [17.6, 90.0], [17.7, 90.0], [17.8, 90.0], [17.9, 90.0], [18.0, 90.0], [18.1, 90.0], [18.2, 90.0], [18.3, 90.0], [18.4, 90.0], [18.5, 90.0], [18.6, 90.0], [18.7, 91.0], [18.8, 91.0], [18.9, 91.0], [19.0, 91.0], [19.1, 91.0], [19.2, 91.0], [19.3, 91.0], [19.4, 91.0], [19.5, 91.0], [19.6, 91.0], [19.7, 91.0], [19.8, 91.0], [19.9, 91.0], [20.0, 91.0], [20.1, 91.0], [20.2, 91.0], [20.3, 91.0], [20.4, 91.0], [20.5, 91.0], [20.6, 91.0], [20.7, 91.0], [20.8, 91.0], [20.9, 91.0], [21.0, 92.0], [21.1, 92.0], [21.2, 92.0], [21.3, 92.0], [21.4, 92.0], [21.5, 92.0], [21.6, 92.0], [21.7, 92.0], [21.8, 92.0], [21.9, 92.0], [22.0, 92.0], [22.1, 92.0], [22.2, 92.0], [22.3, 92.0], [22.4, 92.0], [22.5, 92.0], [22.6, 92.0], [22.7, 92.0], [22.8, 92.0], [22.9, 92.0], [23.0, 92.0], [23.1, 92.0], [23.2, 92.0], [23.3, 92.0], [23.4, 92.0], [23.5, 92.0], [23.6, 92.0], [23.7, 93.0], [23.8, 93.0], [23.9, 93.0], [24.0, 93.0], [24.1, 93.0], [24.2, 93.0], [24.3, 93.0], [24.4, 93.0], [24.5, 93.0], [24.6, 93.0], [24.7, 93.0], [24.8, 93.0], [24.9, 93.0], [25.0, 93.0], [25.1, 93.0], [25.2, 93.0], [25.3, 93.0], [25.4, 93.0], [25.5, 93.0], [25.6, 93.0], [25.7, 93.0], [25.8, 93.0], [25.9, 93.0], [26.0, 93.0], [26.1, 93.0], [26.2, 93.0], [26.3, 93.0], [26.4, 94.0], [26.5, 94.0], [26.6, 94.0], [26.7, 94.0], [26.8, 94.0], [26.9, 94.0], [27.0, 94.0], [27.1, 94.0], [27.2, 94.0], [27.3, 94.0], [27.4, 94.0], [27.5, 94.0], [27.6, 94.0], [27.7, 94.0], [27.8, 94.0], [27.9, 94.0], [28.0, 94.0], [28.1, 94.0], [28.2, 94.0], [28.3, 94.0], [28.4, 94.0], [28.5, 94.0], [28.6, 94.0], [28.7, 94.0], [28.8, 94.0], [28.9, 94.0], [29.0, 94.0], [29.1, 94.0], [29.2, 94.0], [29.3, 94.0], [29.4, 95.0], [29.5, 95.0], [29.6, 95.0], [29.7, 95.0], [29.8, 95.0], [29.9, 95.0], [30.0, 95.0], [30.1, 95.0], [30.2, 95.0], [30.3, 95.0], [30.4, 95.0], [30.5, 95.0], [30.6, 95.0], [30.7, 95.0], [30.8, 95.0], [30.9, 95.0], [31.0, 95.0], [31.1, 95.0], [31.2, 95.0], [31.3, 95.0], [31.4, 95.0], [31.5, 95.0], [31.6, 95.0], [31.7, 95.0], [31.8, 95.0], [31.9, 95.0], [32.0, 95.0], [32.1, 95.0], [32.2, 95.0], [32.3, 95.0], [32.4, 95.0], [32.5, 95.0], [32.6, 96.0], [32.7, 96.0], [32.8, 96.0], [32.9, 96.0], [33.0, 96.0], [33.1, 96.0], [33.2, 96.0], [33.3, 96.0], [33.4, 96.0], [33.5, 96.0], [33.6, 96.0], [33.7, 96.0], [33.8, 96.0], [33.9, 96.0], [34.0, 96.0], [34.1, 96.0], [34.2, 96.0], [34.3, 96.0], [34.4, 96.0], [34.5, 96.0], [34.6, 96.0], [34.7, 96.0], [34.8, 96.0], [34.9, 96.0], [35.0, 96.0], [35.1, 96.0], [35.2, 96.0], [35.3, 96.0], [35.4, 96.0], [35.5, 96.0], [35.6, 96.0], [35.7, 96.0], [35.8, 97.0], [35.9, 97.0], [36.0, 97.0], [36.1, 97.0], [36.2, 97.0], [36.3, 97.0], [36.4, 97.0], [36.5, 97.0], [36.6, 97.0], [36.7, 97.0], [36.8, 97.0], [36.9, 97.0], [37.0, 97.0], [37.1, 97.0], [37.2, 97.0], [37.3, 97.0], [37.4, 97.0], [37.5, 97.0], [37.6, 97.0], [37.7, 97.0], [37.8, 97.0], [37.9, 97.0], [38.0, 97.0], [38.1, 97.0], [38.2, 97.0], [38.3, 97.0], [38.4, 97.0], [38.5, 97.0], [38.6, 97.0], [38.7, 97.0], [38.8, 97.0], [38.9, 97.0], [39.0, 97.0], [39.1, 97.0], [39.2, 98.0], [39.3, 98.0], [39.4, 98.0], [39.5, 98.0], [39.6, 98.0], [39.7, 98.0], [39.8, 98.0], [39.9, 98.0], [40.0, 98.0], [40.1, 98.0], [40.2, 98.0], [40.3, 98.0], [40.4, 98.0], [40.5, 98.0], [40.6, 98.0], [40.7, 98.0], [40.8, 98.0], [40.9, 98.0], [41.0, 98.0], [41.1, 98.0], [41.2, 98.0], [41.3, 98.0], [41.4, 98.0], [41.5, 98.0], [41.6, 98.0], [41.7, 98.0], [41.8, 98.0], [41.9, 98.0], [42.0, 98.0], [42.1, 98.0], [42.2, 98.0], [42.3, 98.0], [42.4, 98.0], [42.5, 99.0], [42.6, 99.0], [42.7, 99.0], [42.8, 99.0], [42.9, 99.0], [43.0, 99.0], [43.1, 99.0], [43.2, 99.0], [43.3, 99.0], [43.4, 99.0], [43.5, 99.0], [43.6, 99.0], [43.7, 99.0], [43.8, 99.0], [43.9, 99.0], [44.0, 99.0], [44.1, 99.0], [44.2, 99.0], [44.3, 99.0], [44.4, 99.0], [44.5, 99.0], [44.6, 99.0], [44.7, 99.0], [44.8, 99.0], [44.9, 99.0], [45.0, 99.0], [45.1, 99.0], [45.2, 99.0], [45.3, 99.0], [45.4, 99.0], [45.5, 99.0], [45.6, 99.0], [45.7, 99.0], [45.8, 99.0], [45.9, 100.0], [46.0, 100.0], [46.1, 100.0], [46.2, 100.0], [46.3, 100.0], [46.4, 100.0], [46.5, 100.0], [46.6, 100.0], [46.7, 100.0], [46.8, 100.0], [46.9, 100.0], [47.0, 100.0], [47.1, 100.0], [47.2, 100.0], [47.3, 100.0], [47.4, 100.0], [47.5, 100.0], [47.6, 100.0], [47.7, 100.0], [47.8, 100.0], [47.9, 100.0], [48.0, 100.0], [48.1, 100.0], [48.2, 100.0], [48.3, 100.0], [48.4, 100.0], [48.5, 100.0], [48.6, 100.0], [48.7, 100.0], [48.8, 100.0], [48.9, 100.0], [49.0, 100.0], [49.1, 100.0], [49.2, 101.0], [49.3, 101.0], [49.4, 101.0], [49.5, 101.0], [49.6, 101.0], [49.7, 101.0], [49.8, 101.0], [49.9, 101.0], [50.0, 101.0], [50.1, 101.0], [50.2, 101.0], [50.3, 101.0], [50.4, 101.0], [50.5, 101.0], [50.6, 101.0], [50.7, 101.0], [50.8, 101.0], [50.9, 101.0], [51.0, 101.0], [51.1, 101.0], [51.2, 101.0], [51.3, 101.0], [51.4, 101.0], [51.5, 101.0], [51.6, 101.0], [51.7, 101.0], [51.8, 101.0], [51.9, 101.0], [52.0, 101.0], [52.1, 101.0], [52.2, 101.0], [52.3, 101.0], [52.4, 102.0], [52.5, 102.0], [52.6, 102.0], [52.7, 102.0], [52.8, 102.0], [52.9, 102.0], [53.0, 102.0], [53.1, 102.0], [53.2, 102.0], [53.3, 102.0], [53.4, 102.0], [53.5, 102.0], [53.6, 102.0], [53.7, 102.0], [53.8, 102.0], [53.9, 102.0], [54.0, 102.0], [54.1, 102.0], [54.2, 102.0], [54.3, 102.0], [54.4, 102.0], [54.5, 102.0], [54.6, 102.0], [54.7, 102.0], [54.8, 102.0], [54.9, 102.0], [55.0, 102.0], [55.1, 102.0], [55.2, 102.0], [55.3, 102.0], [55.4, 103.0], [55.5, 103.0], [55.6, 103.0], [55.7, 103.0], [55.8, 103.0], [55.9, 103.0], [56.0, 103.0], [56.1, 103.0], [56.2, 103.0], [56.3, 103.0], [56.4, 103.0], [56.5, 103.0], [56.6, 103.0], [56.7, 103.0], [56.8, 103.0], [56.9, 103.0], [57.0, 103.0], [57.1, 103.0], [57.2, 103.0], [57.3, 103.0], [57.4, 103.0], [57.5, 103.0], [57.6, 103.0], [57.7, 103.0], [57.8, 103.0], [57.9, 103.0], [58.0, 103.0], [58.1, 103.0], [58.2, 103.0], [58.3, 103.0], [58.4, 104.0], [58.5, 104.0], [58.6, 104.0], [58.7, 104.0], [58.8, 104.0], [58.9, 104.0], [59.0, 104.0], [59.1, 104.0], [59.2, 104.0], [59.3, 104.0], [59.4, 104.0], [59.5, 104.0], [59.6, 104.0], [59.7, 104.0], [59.8, 104.0], [59.9, 104.0], [60.0, 104.0], [60.1, 104.0], [60.2, 104.0], [60.3, 104.0], [60.4, 104.0], [60.5, 104.0], [60.6, 104.0], [60.7, 104.0], [60.8, 104.0], [60.9, 104.0], [61.0, 104.0], [61.1, 104.0], [61.2, 105.0], [61.3, 105.0], [61.4, 105.0], [61.5, 105.0], [61.6, 105.0], [61.7, 105.0], [61.8, 105.0], [61.9, 105.0], [62.0, 105.0], [62.1, 105.0], [62.2, 105.0], [62.3, 105.0], [62.4, 105.0], [62.5, 105.0], [62.6, 105.0], [62.7, 105.0], [62.8, 105.0], [62.9, 105.0], [63.0, 105.0], [63.1, 105.0], [63.2, 105.0], [63.3, 105.0], [63.4, 105.0], [63.5, 105.0], [63.6, 105.0], [63.7, 105.0], [63.8, 105.0], [63.9, 106.0], [64.0, 106.0], [64.1, 106.0], [64.2, 106.0], [64.3, 106.0], [64.4, 106.0], [64.5, 106.0], [64.6, 106.0], [64.7, 106.0], [64.8, 106.0], [64.9, 106.0], [65.0, 106.0], [65.1, 106.0], [65.2, 106.0], [65.3, 106.0], [65.4, 106.0], [65.5, 106.0], [65.6, 106.0], [65.7, 106.0], [65.8, 106.0], [65.9, 106.0], [66.0, 106.0], [66.1, 106.0], [66.2, 106.0], [66.3, 106.0], [66.4, 106.0], [66.5, 107.0], [66.6, 107.0], [66.7, 107.0], [66.8, 107.0], [66.9, 107.0], [67.0, 107.0], [67.1, 107.0], [67.2, 107.0], [67.3, 107.0], [67.4, 107.0], [67.5, 107.0], [67.6, 107.0], [67.7, 107.0], [67.8, 107.0], [67.9, 107.0], [68.0, 107.0], [68.1, 107.0], [68.2, 107.0], [68.3, 107.0], [68.4, 107.0], [68.5, 107.0], [68.6, 107.0], [68.7, 107.0], [68.8, 107.0], [68.9, 108.0], [69.0, 108.0], [69.1, 108.0], [69.2, 108.0], [69.3, 108.0], [69.4, 108.0], [69.5, 108.0], [69.6, 108.0], [69.7, 108.0], [69.8, 108.0], [69.9, 108.0], [70.0, 108.0], [70.1, 108.0], [70.2, 108.0], [70.3, 108.0], [70.4, 108.0], [70.5, 108.0], [70.6, 108.0], [70.7, 108.0], [70.8, 108.0], [70.9, 108.0], [71.0, 108.0], [71.1, 109.0], [71.2, 109.0], [71.3, 109.0], [71.4, 109.0], [71.5, 109.0], [71.6, 109.0], [71.7, 109.0], [71.8, 109.0], [71.9, 109.0], [72.0, 109.0], [72.1, 109.0], [72.2, 109.0], [72.3, 109.0], [72.4, 109.0], [72.5, 109.0], [72.6, 109.0], [72.7, 109.0], [72.8, 109.0], [72.9, 109.0], [73.0, 109.0], [73.1, 109.0], [73.2, 110.0], [73.3, 110.0], [73.4, 110.0], [73.5, 110.0], [73.6, 110.0], [73.7, 110.0], [73.8, 110.0], [73.9, 110.0], [74.0, 110.0], [74.1, 110.0], [74.2, 110.0], [74.3, 110.0], [74.4, 110.0], [74.5, 110.0], [74.6, 110.0], [74.7, 110.0], [74.8, 110.0], [74.9, 110.0], [75.0, 110.0], [75.1, 110.0], [75.2, 111.0], [75.3, 111.0], [75.4, 111.0], [75.5, 111.0], [75.6, 111.0], [75.7, 111.0], [75.8, 111.0], [75.9, 111.0], [76.0, 111.0], [76.1, 111.0], [76.2, 111.0], [76.3, 111.0], [76.4, 111.0], [76.5, 111.0], [76.6, 111.0], [76.7, 111.0], [76.8, 111.0], [76.9, 111.0], [77.0, 112.0], [77.1, 112.0], [77.2, 112.0], [77.3, 112.0], [77.4, 112.0], [77.5, 112.0], [77.6, 112.0], [77.7, 112.0], [77.8, 112.0], [77.9, 112.0], [78.0, 112.0], [78.1, 112.0], [78.2, 112.0], [78.3, 112.0], [78.4, 112.0], [78.5, 112.0], [78.6, 112.0], [78.7, 113.0], [78.8, 113.0], [78.9, 113.0], [79.0, 113.0], [79.1, 113.0], [79.2, 113.0], [79.3, 113.0], [79.4, 113.0], [79.5, 113.0], [79.6, 113.0], [79.7, 113.0], [79.8, 113.0], [79.9, 113.0], [80.0, 113.0], [80.1, 113.0], [80.2, 114.0], [80.3, 114.0], [80.4, 114.0], [80.5, 114.0], [80.6, 114.0], [80.7, 114.0], [80.8, 114.0], [80.9, 114.0], [81.0, 114.0], [81.1, 114.0], [81.2, 114.0], [81.3, 114.0], [81.4, 114.0], [81.5, 114.0], [81.6, 114.0], [81.7, 115.0], [81.8, 115.0], [81.9, 115.0], [82.0, 115.0], [82.1, 115.0], [82.2, 115.0], [82.3, 115.0], [82.4, 115.0], [82.5, 115.0], [82.6, 115.0], [82.7, 115.0], [82.8, 115.0], [82.9, 115.0], [83.0, 115.0], [83.1, 116.0], [83.2, 116.0], [83.3, 116.0], [83.4, 116.0], [83.5, 116.0], [83.6, 116.0], [83.7, 116.0], [83.8, 116.0], [83.9, 116.0], [84.0, 116.0], [84.1, 116.0], [84.2, 116.0], [84.3, 116.0], [84.4, 117.0], [84.5, 117.0], [84.6, 117.0], [84.7, 117.0], [84.8, 117.0], [84.9, 117.0], [85.0, 117.0], [85.1, 117.0], [85.2, 117.0], [85.3, 117.0], [85.4, 117.0], [85.5, 118.0], [85.6, 118.0], [85.7, 118.0], [85.8, 118.0], [85.9, 118.0], [86.0, 118.0], [86.1, 118.0], [86.2, 118.0], [86.3, 118.0], [86.4, 118.0], [86.5, 118.0], [86.6, 119.0], [86.7, 119.0], [86.8, 119.0], [86.9, 119.0], [87.0, 119.0], [87.1, 119.0], [87.2, 119.0], [87.3, 119.0], [87.4, 119.0], [87.5, 119.0], [87.6, 119.0], [87.7, 120.0], [87.8, 120.0], [87.9, 120.0], [88.0, 120.0], [88.1, 120.0], [88.2, 120.0], [88.3, 120.0], [88.4, 120.0], [88.5, 120.0], [88.6, 121.0], [88.7, 121.0], [88.8, 121.0], [88.9, 121.0], [89.0, 121.0], [89.1, 121.0], [89.2, 121.0], [89.3, 121.0], [89.4, 121.0], [89.5, 122.0], [89.6, 122.0], [89.7, 122.0], [89.8, 122.0], [89.9, 122.0], [90.0, 122.0], [90.1, 122.0], [90.2, 122.0], [90.3, 123.0], [90.4, 123.0], [90.5, 123.0], [90.6, 123.0], [90.7, 123.0], [90.8, 123.0], [90.9, 123.0], [91.0, 123.0], [91.1, 124.0], [91.2, 124.0], [91.3, 124.0], [91.4, 124.0], [91.5, 124.0], [91.6, 124.0], [91.7, 124.0], [91.8, 125.0], [91.9, 125.0], [92.0, 125.0], [92.1, 125.0], [92.2, 125.0], [92.3, 125.0], [92.4, 126.0], [92.5, 126.0], [92.6, 126.0], [92.7, 126.0], [92.8, 126.0], [92.9, 126.0], [93.0, 127.0], [93.1, 127.0], [93.2, 127.0], [93.3, 127.0], [93.4, 127.0], [93.5, 128.0], [93.6, 128.0], [93.7, 128.0], [93.8, 128.0], [93.9, 128.0], [94.0, 129.0], [94.1, 129.0], [94.2, 129.0], [94.3, 129.0], [94.4, 129.0], [94.5, 130.0], [94.6, 130.0], [94.7, 130.0], [94.8, 130.0], [94.9, 131.0], [95.0, 131.0], [95.1, 131.0], [95.2, 131.0], [95.3, 132.0], [95.4, 132.0], [95.5, 132.0], [95.6, 132.0], [95.7, 133.0], [95.8, 133.0], [95.9, 133.0], [96.0, 134.0], [96.1, 134.0], [96.2, 134.0], [96.3, 135.0], [96.4, 135.0], [96.5, 135.0], [96.6, 136.0], [96.7, 136.0], [96.8, 137.0], [96.9, 137.0], [97.0, 137.0], [97.1, 138.0], [97.2, 138.0], [97.3, 139.0], [97.4, 139.0], [97.5, 140.0], [97.6, 140.0], [97.7, 141.0], [97.8, 142.0], [97.9, 142.0], [98.0, 143.0], [98.1, 144.0], [98.2, 144.0], [98.3, 145.0], [98.4, 146.0], [98.5, 147.0], [98.6, 148.0], [98.7, 149.0], [98.8, 150.0], [98.9, 151.0], [99.0, 153.0], [99.1, 155.0], [99.2, 157.0], [99.3, 159.0], [99.4, 161.0], [99.5, 164.0], [99.6, 168.0], [99.7, 173.0], [99.8, 181.0], [99.9, 205.0], [100.0, 2045.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 86.0, "minX": 0.0, "maxY": 270219.0, "series": [{"data": [[0.0, 229201.0], [300.0, 121.0], [100.0, 270219.0], [200.0, 373.0], [2000.0, 86.0]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 86.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 499914.0, "series": [{"data": [[0.0, 499914.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 86.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.0555555555555562, "minX": 1.59420066E12, "maxY": 50.0, "series": [{"data": [[1.59420138E12, 50.0], [1.59420168E12, 49.361467038068774], [1.59420072E12, 50.0], [1.59420174E12, 3.0555555555555562], [1.59420078E12, 50.0], [1.59420108E12, 50.0], [1.59420162E12, 50.0], [1.59420066E12, 49.583122057225715], [1.59420096E12, 50.0], [1.59420102E12, 50.0], [1.59420132E12, 50.0], [1.5942009E12, 50.0], [1.5942012E12, 50.0], [1.59420126E12, 50.0], [1.59420156E12, 50.0], [1.59420114E12, 50.0], [1.59420144E12, 50.0], [1.5942015E12, 50.0], [1.59420084E12, 50.0]], "isOverall": false, "label": "\u7EBF\u7A0B\u7EC4", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59420174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 31.809523809523814, "minX": 1.0, "maxY": 2041.0, "series": [{"data": [[32.0, 69.14285714285715], [33.0, 77.8095238095238], [2.0, 2029.3749999999998], [34.0, 65.66666666666666], [35.0, 75.30434782608695], [36.0, 84.8076923076923], [37.0, 81.74509803921568], [38.0, 80.46428571428571], [39.0, 96.0], [40.0, 85.83333333333334], [41.0, 79.27710843373491], [42.0, 78.63636363636361], [43.0, 99.59183673469386], [44.0, 87.29545454545458], [45.0, 91.3529411764706], [46.0, 92.51063829787232], [47.0, 94.28333333333335], [48.0, 96.88888888888893], [49.0, 100.03199999999994], [3.0, 2023.0], [50.0, 102.69379746936816], [5.0, 2025.6363636363637], [6.0, 2041.0], [7.0, 2032.7435897435896], [8.0, 1771.0], [11.0, 31.809523809523814], [12.0, 100.9090909090909], [13.0, 32.857142857142854], [14.0, 47.5], [15.0, 47.666666666666664], [16.0, 36.916666666666664], [1.0, 2030.0], [17.0, 51.69230769230769], [18.0, 46.652173913043484], [19.0, 44.0], [20.0, 49.680000000000014], [21.0, 45.0], [22.0, 52.96875], [23.0, 57.09090909090909], [24.0, 74.3], [25.0, 64.83999999999999], [26.0, 45.5], [27.0, 66.3125], [28.0, 58.083333333333336], [29.0, 63.3913043478261], [30.0, 42.0], [31.0, 67.8888888888889]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}, {"data": [[49.95990400000204, 102.96655800000147]], "isOverall": false, "label": "HTTP\u8BF7\u6C42-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 147.6, "minX": 1.59420066E12, "maxY": 471816.55, "series": [{"data": [[1.59420138E12, 459600.26666666666], [1.59420168E12, 335013.6666666667], [1.59420072E12, 469788.38333333336], [1.59420174E12, 559.8], [1.59420078E12, 471816.55], [1.59420108E12, 392981.8333333333], [1.59420162E12, 456123.3], [1.59420066E12, 171736.86666666667], [1.59420096E12, 468246.5], [1.59420102E12, 432926.45], [1.59420132E12, 457714.05], [1.5942009E12, 470199.13333333336], [1.5942012E12, 469628.01666666666], [1.59420126E12, 465782.5], [1.59420156E12, 453197.45], [1.59420114E12, 413621.35], [1.59420144E12, 457774.7], [1.5942015E12, 458753.4666666667], [1.59420084E12, 470425.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.59420138E12, 121163.2], [1.59420168E12, 88314.0], [1.59420072E12, 123865.1], [1.59420174E12, 147.6], [1.59420078E12, 124398.1], [1.59420108E12, 103607.0], [1.59420162E12, 120236.6], [1.59420066E12, 45280.4], [1.59420096E12, 123451.0], [1.59420102E12, 114139.9], [1.59420132E12, 120667.1], [1.5942009E12, 123967.6], [1.5942012E12, 123807.7], [1.59420126E12, 122795.0], [1.59420156E12, 119469.9], [1.59420114E12, 109047.7], [1.59420144E12, 120679.4], [1.5942015E12, 120933.6], [1.59420084E12, 124029.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59420174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 98.8274611911275, "minX": 1.59420066E12, "maxY": 2026.25, "series": [{"data": [[1.59420138E12, 101.47766648619391], [1.59420168E12, 106.65501392757635], [1.59420072E12, 99.23594055145456], [1.59420174E12, 2026.25], [1.59420078E12, 98.8274611911275], [1.59420108E12, 118.63810842896756], [1.59420162E12, 102.22526086067013], [1.59420066E12, 103.48279608837373], [1.59420096E12, 99.59196280305508], [1.59420102E12, 107.66327813499038], [1.59420132E12, 101.9003431755633], [1.5942009E12, 99.16126471755487], [1.5942012E12, 99.19952313143651], [1.59420126E12, 100.09268781302099], [1.59420156E12, 102.91005182058447], [1.59420114E12, 112.74711433620335], [1.59420144E12, 101.863389277705], [1.5942015E12, 101.63239083265579], [1.59420084E12, 99.1344748933926]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59420174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 98.825483668962, "minX": 1.59420066E12, "maxY": 2026.2222222222222, "series": [{"data": [[1.59420138E12, 101.47567000541348], [1.59420168E12, 106.65338904363952], [1.59420072E12, 99.23405382145569], [1.59420174E12, 2026.2222222222222], [1.59420078E12, 98.825483668962], [1.59420108E12, 118.63549663632823], [1.59420162E12, 102.22328309350034], [1.59420066E12, 103.47428467946393], [1.59420096E12, 99.59043507140429], [1.59420102E12, 107.66090736017885], [1.59420132E12, 101.89901804220084], [1.5942009E12, 99.15878423071801], [1.5942012E12, 99.19783422194236], [1.59420126E12, 100.09075125208697], [1.59420156E12, 102.90826727066825], [1.59420114E12, 112.74504643380862], [1.59420144E12, 101.8618264591979], [1.5942015E12, 101.63052617304035], [1.59420084E12, 99.132590658159]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59420174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.59420066E12, "maxY": 0.017022817819630578, "series": [{"data": [[1.59420138E12, 9.813210611802797E-4], [1.59420168E12, 0.0011606313834726064], [1.59420072E12, 8.937142100559433E-4], [1.59420174E12, 0.0], [1.59420078E12, 0.0012524307043274884], [1.59420108E12, 0.0015433320142461424], [1.59420162E12, 8.183864147855146E-4], [1.59420066E12, 0.017022817819630578], [1.59420096E12, 8.967120557954196E-4], [1.59420102E12, 0.0012213082366464266], [1.59420132E12, 8.494444633209855E-4], [1.5942009E12, 9.59121576928155E-4], [1.5942012E12, 7.616650660661696E-4], [1.59420126E12, 9.015025041736254E-4], [1.59420156E12, 8.579566903462698E-4], [1.59420114E12, 9.77553859457838E-4], [1.59420144E12, 8.153835700210653E-4], [1.5942015E12, 8.475725522104693E-4], [1.59420084E12, 0.001223100062807839]], "isOverall": false, "label": "HTTP\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59420174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.59420066E12, "maxY": 2045.0, "series": [{"data": [[1.59420138E12, 188.0], [1.59420168E12, 2045.0], [1.59420072E12, 211.0], [1.59420174E12, 2041.0], [1.59420078E12, 367.0], [1.59420108E12, 323.0], [1.59420162E12, 228.0], [1.59420066E12, 271.0], [1.59420096E12, 246.0], [1.59420102E12, 266.0], [1.59420132E12, 242.0], [1.5942009E12, 188.0], [1.5942012E12, 208.0], [1.59420126E12, 210.0], [1.59420156E12, 368.0], [1.59420114E12, 222.0], [1.59420144E12, 203.0], [1.5942015E12, 229.0], [1.59420084E12, 187.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.59420138E12, 67.0], [1.59420168E12, 46.0], [1.59420072E12, 67.00899523139], [1.59420174E12, 2013.0], [1.59420078E12, 69.0], [1.59420108E12, 79.0], [1.59420162E12, 64.00899523139], [1.59420066E12, 66.0], [1.59420096E12, 68.0], [1.59420102E12, 75.0], [1.59420132E12, 70.0], [1.5942009E12, 68.0], [1.5942012E12, 68.0], [1.59420126E12, 69.0], [1.59420156E12, 69.0], [1.59420114E12, 73.0], [1.59420144E12, 72.0], [1.5942015E12, 68.0], [1.59420084E12, 68.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.59420138E12, 68.0], [1.59420168E12, 49.0], [1.59420072E12, 68.0], [1.59420174E12, 2013.0], [1.59420078E12, 69.0], [1.59420108E12, 80.0], [1.59420162E12, 66.0], [1.59420066E12, 67.0], [1.59420096E12, 69.0], [1.59420102E12, 75.0], [1.59420132E12, 71.0], [1.5942009E12, 69.0], [1.5942012E12, 69.0], [1.59420126E12, 70.0], [1.59420156E12, 70.0], [1.59420114E12, 75.0], [1.59420144E12, 72.0], [1.5942015E12, 69.0], [1.59420084E12, 69.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.59420138E12, 68.0], [1.59420168E12, 48.0], [1.59420072E12, 68.0], [1.59420174E12, 2013.0], [1.59420078E12, 69.0], [1.59420108E12, 80.0], [1.59420162E12, 65.0], [1.59420066E12, 66.0], [1.59420096E12, 69.0], [1.59420102E12, 75.0], [1.59420132E12, 70.0], [1.5942009E12, 68.0], [1.5942012E12, 69.0], [1.59420126E12, 70.0], [1.59420156E12, 70.0], [1.59420114E12, 74.0], [1.59420144E12, 72.0], [1.5942015E12, 68.0], [1.59420084E12, 69.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.59420138E12, 5.0], [1.59420168E12, 5.0], [1.59420072E12, 6.0], [1.59420174E12, 2013.0], [1.59420078E12, 6.0], [1.59420108E12, 7.0], [1.59420162E12, 4.0], [1.59420066E12, 11.0], [1.59420096E12, 6.0], [1.59420102E12, 6.0], [1.59420132E12, 6.0], [1.5942009E12, 5.0], [1.5942012E12, 4.0], [1.59420126E12, 5.0], [1.59420156E12, 3.0], [1.59420114E12, 3.0], [1.59420144E12, 4.0], [1.5942015E12, 4.0], [1.59420084E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.59420138E12, 101.0], [1.59420168E12, 102.0], [1.59420072E12, 98.0], [1.59420174E12, 2029.5], [1.59420078E12, 98.0], [1.59420108E12, 117.0], [1.59420162E12, 101.0], [1.59420066E12, 101.0], [1.59420096E12, 99.0], [1.59420102E12, 111.0], [1.59420132E12, 101.0], [1.5942009E12, 98.0], [1.5942012E12, 98.0], [1.59420126E12, 99.0], [1.59420156E12, 101.0], [1.59420114E12, 111.0], [1.59420144E12, 101.0], [1.5942015E12, 101.0], [1.59420084E12, 98.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59420174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 2035.5, "series": [{"data": [[2.0, 2034.0], [3.0, 2023.0], [5.0, 2023.0], [7.0, 2035.5], [8.0, 2016.5], [60.0, 64.0], [171.0, 47.0], [330.0, 143.0], [351.0, 137.0], [340.0, 147.0], [364.0, 135.0], [360.0, 136.0], [352.0, 138.0], [382.0, 100.0], [371.0, 132.0], [370.0, 136.0], [372.0, 123.0], [380.0, 99.0], [389.0, 132.0], [390.0, 127.0], [395.0, 126.0], [403.0, 119.0], [410.0, 120.0], [415.0, 121.0], [413.0, 120.0], [400.0, 122.0], [411.0, 120.0], [412.0, 119.0], [401.0, 123.0], [404.0, 122.0], [402.0, 119.0], [416.0, 120.0], [420.0, 116.0], [431.0, 115.0], [430.0, 114.0], [417.0, 118.0], [418.0, 113.5], [424.0, 116.0], [425.0, 115.0], [427.0, 117.0], [421.0, 117.0], [423.0, 117.0], [422.0, 116.0], [435.0, 112.0], [439.0, 115.0], [436.0, 106.0], [437.0, 115.0], [433.0, 114.0], [440.0, 114.0], [445.0, 113.0], [444.0, 113.5], [441.0, 113.0], [434.0, 115.0], [442.0, 113.0], [443.0, 115.0], [432.0, 115.0], [460.0, 107.0], [463.0, 105.0], [459.0, 104.0], [456.0, 110.0], [461.0, 106.0], [450.0, 111.0], [448.0, 109.0], [452.0, 105.0], [454.0, 107.0], [457.0, 109.0], [451.0, 111.0], [462.0, 105.5], [477.0, 105.0], [470.0, 104.0], [479.0, 104.0], [469.0, 105.0], [467.0, 106.0], [476.0, 105.0], [471.0, 104.0], [464.0, 106.0], [465.0, 105.0], [472.0, 103.0], [473.0, 104.0], [474.0, 104.0], [475.0, 105.0], [494.0, 101.0], [482.0, 103.0], [480.0, 101.0], [491.0, 100.0], [486.0, 102.0], [487.0, 102.0], [485.0, 102.0], [484.0, 104.0], [490.0, 100.0], [489.0, 101.0], [495.0, 100.0], [492.0, 101.0], [483.0, 103.0], [493.0, 100.0], [481.0, 102.0], [508.0, 97.0], [500.0, 99.0], [504.0, 100.0], [505.0, 98.0], [501.0, 99.0], [511.0, 98.0], [510.0, 97.0], [509.0, 99.0], [506.0, 98.0], [502.0, 99.0], [503.0, 99.0], [496.0, 101.0], [497.0, 99.0], [499.0, 99.0], [498.0, 98.0], [507.0, 97.0], [515.0, 98.0], [524.0, 96.0], [520.0, 96.0], [530.0, 95.0], [531.0, 95.0], [541.0, 93.0], [529.0, 95.0], [528.0, 96.0], [542.0, 94.0], [521.0, 96.0], [525.0, 96.0], [526.0, 97.0], [512.0, 98.0], [514.0, 97.0], [513.0, 98.0], [540.0, 93.0], [523.0, 96.0], [522.0, 96.0], [519.0, 97.0], [517.0, 97.0], [516.0, 97.0], [539.0, 94.0], [536.0, 95.0], [532.0, 95.0], [533.0, 93.0], [550.0, 92.0], [1.0, 2030.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 550.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 2035.5, "series": [{"data": [[2.0, 2033.5], [3.0, 2023.0], [5.0, 2023.0], [7.0, 2035.5], [8.0, 2016.5], [60.0, 63.5], [171.0, 47.0], [330.0, 143.0], [351.0, 137.0], [340.0, 147.0], [364.0, 135.0], [360.0, 136.0], [352.0, 138.0], [382.0, 100.0], [371.0, 132.0], [370.0, 136.0], [372.0, 123.0], [380.0, 99.0], [389.0, 132.0], [390.0, 127.0], [395.0, 126.0], [403.0, 119.0], [410.0, 120.0], [415.0, 121.0], [413.0, 120.0], [400.0, 122.0], [411.0, 120.0], [412.0, 119.0], [401.0, 123.0], [404.0, 122.0], [402.0, 119.0], [416.0, 120.0], [420.0, 116.0], [431.0, 115.0], [430.0, 114.0], [417.0, 118.0], [418.0, 113.5], [424.0, 116.0], [425.0, 115.0], [427.0, 117.0], [421.0, 117.0], [423.0, 117.0], [422.0, 116.0], [435.0, 112.0], [439.0, 115.0], [436.0, 106.0], [437.0, 115.0], [433.0, 114.0], [440.0, 114.0], [445.0, 113.0], [444.0, 113.5], [441.0, 113.0], [434.0, 115.0], [442.0, 113.0], [443.0, 115.0], [432.0, 115.0], [460.0, 107.0], [463.0, 105.0], [459.0, 104.0], [456.0, 110.0], [461.0, 106.0], [450.0, 111.0], [448.0, 109.0], [452.0, 105.0], [454.0, 107.0], [457.0, 109.0], [451.0, 111.0], [462.0, 105.5], [477.0, 105.0], [470.0, 104.0], [479.0, 104.0], [469.0, 105.0], [467.0, 106.0], [476.0, 105.0], [471.0, 104.0], [464.0, 106.0], [465.0, 105.0], [472.0, 103.0], [473.0, 104.0], [474.0, 104.0], [475.0, 105.0], [494.0, 101.0], [482.0, 103.0], [480.0, 101.0], [491.0, 100.0], [486.0, 102.0], [487.0, 102.0], [485.0, 102.0], [484.0, 104.0], [490.0, 100.0], [489.0, 101.0], [495.0, 100.0], [492.0, 101.0], [483.0, 103.0], [493.0, 100.0], [481.0, 102.0], [508.0, 97.0], [500.0, 99.0], [504.0, 100.0], [505.0, 98.0], [501.0, 99.0], [511.0, 98.0], [510.0, 97.0], [509.0, 99.0], [506.0, 98.0], [502.0, 99.0], [503.0, 99.0], [496.0, 101.0], [497.0, 99.0], [499.0, 99.0], [498.0, 98.0], [507.0, 97.0], [515.0, 98.0], [524.0, 96.0], [520.0, 96.0], [530.0, 95.0], [531.0, 95.0], [541.0, 93.0], [529.0, 95.0], [528.0, 96.0], [542.0, 94.0], [521.0, 96.0], [525.0, 96.0], [526.0, 97.0], [512.0, 98.0], [514.0, 97.0], [513.0, 98.0], [540.0, 93.0], [523.0, 96.0], [522.0, 96.0], [519.0, 97.0], [517.0, 97.0], [516.0, 97.0], [539.0, 94.0], [536.0, 95.0], [532.0, 95.0], [533.0, 93.0], [550.0, 92.0], [1.0, 2030.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 550.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.59420066E12, "maxY": 505.68333333333334, "series": [{"data": [[1.59420138E12, 492.53333333333336], [1.59420168E12, 358.25], [1.59420072E12, 503.51666666666665], [1.59420174E12, 0.5166666666666667], [1.59420078E12, 505.68333333333334], [1.59420108E12, 421.1666666666667], [1.59420162E12, 488.76666666666665], [1.59420066E12, 184.9], [1.59420096E12, 501.8333333333333], [1.59420102E12, 463.98333333333335], [1.59420132E12, 490.51666666666665], [1.5942009E12, 503.93333333333334], [1.5942012E12, 503.28333333333336], [1.59420126E12, 499.1666666666667], [1.59420156E12, 485.65], [1.59420114E12, 443.28333333333336], [1.59420144E12, 490.56666666666666], [1.5942015E12, 491.6], [1.59420084E12, 504.18333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59420174E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.59420066E12, "maxY": 505.68333333333334, "series": [{"data": [[1.59420138E12, 492.53333333333336], [1.59420168E12, 359.0], [1.59420072E12, 503.51666666666665], [1.59420174E12, 0.6], [1.59420078E12, 505.68333333333334], [1.59420108E12, 421.1666666666667], [1.59420162E12, 488.76666666666665], [1.59420066E12, 184.06666666666666], [1.59420096E12, 501.8333333333333], [1.59420102E12, 463.98333333333335], [1.59420132E12, 490.51666666666665], [1.5942009E12, 503.93333333333334], [1.5942012E12, 503.28333333333336], [1.59420126E12, 499.1666666666667], [1.59420156E12, 485.65], [1.59420114E12, 443.28333333333336], [1.59420144E12, 490.56666666666666], [1.5942015E12, 491.6], [1.59420084E12, 504.18333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.59420174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.59420066E12, "maxY": 505.68333333333334, "series": [{"data": [[1.59420138E12, 492.53333333333336], [1.59420168E12, 359.0], [1.59420072E12, 503.51666666666665], [1.59420174E12, 0.6], [1.59420078E12, 505.68333333333334], [1.59420108E12, 421.1666666666667], [1.59420162E12, 488.76666666666665], [1.59420066E12, 184.06666666666666], [1.59420096E12, 501.8333333333333], [1.59420102E12, 463.98333333333335], [1.59420132E12, 490.51666666666665], [1.5942009E12, 503.93333333333334], [1.5942012E12, 503.28333333333336], [1.59420126E12, 499.1666666666667], [1.59420156E12, 485.65], [1.59420114E12, 443.28333333333336], [1.59420144E12, 490.56666666666666], [1.5942015E12, 491.6], [1.59420084E12, 504.18333333333334]], "isOverall": false, "label": "HTTP\u8BF7\u6C42-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59420174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.59420066E12, "maxY": 505.68333333333334, "series": [{"data": [[1.59420138E12, 492.53333333333336], [1.59420168E12, 359.0], [1.59420072E12, 503.51666666666665], [1.59420174E12, 0.6], [1.59420078E12, 505.68333333333334], [1.59420108E12, 421.1666666666667], [1.59420162E12, 488.76666666666665], [1.59420066E12, 184.06666666666666], [1.59420096E12, 501.8333333333333], [1.59420102E12, 463.98333333333335], [1.59420132E12, 490.51666666666665], [1.5942009E12, 503.93333333333334], [1.5942012E12, 503.28333333333336], [1.59420126E12, 499.1666666666667], [1.59420156E12, 485.65], [1.59420114E12, 443.28333333333336], [1.59420144E12, 490.56666666666666], [1.5942015E12, 491.6], [1.59420084E12, 504.18333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.59420174E12, "title": "Total Transactions Per Second"}},
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

