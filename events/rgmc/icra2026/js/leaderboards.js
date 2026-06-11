window.TableLoader = {
    tables:{},
    register:function(table, func){
        this.tables[table] = func;
    },
    trigger:function(key){
        var self = this;

        if(this.tables[key]){
            this.tables[key]();
            this.tables[key] = function(){};

            var keys = Object.keys(this.tables);
            var index = keys.indexOf(key);

            if(index){
                this.tables[keys[index - 1]]();
                this.tables[keys[index - 1]] = function(){};
            }

            if(index < keys.length - 1){
                this.tables[keys[index + 1]]();
                this.tables[keys[index + 1]] = function(){};
            }
        }

        if(key == "theming"){
            var themes = Object.keys(this.tables).slice(-7);

            themes.forEach(function(item){
                self.trigger(item);
            })
        }
    },
    loadFirst:function(){
        first = Object.keys(this.tables)[0];

        if(first){
            this.trigger(first);
        }
    }
}

function AppearLegend(legend_id) {
    var x = document.getElementById(legend_id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// ///////////////////////////////////////////////////////////////////////////
// ICRA 2024 - 9th Robotic Grasping and Manipulation Competition
// 
// Essential Skills Sub-track 4: Human-to-Robot Handovers
// 
// 

var preparation_table =
[
    {id:1,team:"ETH SRL",score:0.00.toFixed(2)},
    {id:2,team:"SirsIIT",score:0.00.toFixed(2)},
    {id:3,team:"CIS-QMUL",score:0.00.toFixed(2)},
    {id:4,team:"Air-jnu",score:0.00.toFixed(2)},
    {id:5,team:"XJTU_Colab",score:0.00.toFixed(2)},
    {id:6,team:"TCS",score:0.00.toFixed(2)}
];

    // {id:3,team:"CASIA-YIT-HAIZHICHE",score:0.00.toFixed(2)},
    // {id:1,team:"BUPT DexRobot",score:0.00.toFixed(2)},

var competition_table =
[
    {id:1,team:"Youth2Real",score:71.43.toFixed(2)},
    {id:2,team:"Robot Booster",score:63.11.toFixed(2)},
    {id:3,team:"LARICS Gripster",score:55.57.toFixed(2)},
    {id:4,team:"Broken Arm",score:55.26.toFixed(2)},
    {id:5,team:"3D Vision & Robotics Lab",score:52.86.toFixed(2)},
    {id:6,team:"SIRSIIT",score:41.16.toFixed(2)}
    // {id:7,team:"AIRLab",score:6.82.toFixed(2)},
    // {id:8,team:"Shakey's Legacy",score:3.52.toFixed(2)},
];

var corsmal_table =
[
    {
        id:1,
        name:"Baseline (S1)", 
        score:32.00.toFixed(2), 
        s1:59.00.toFixed(2),
        s2:55.00.toFixed(2),
        s3:54.00.toFixed(2),
        s4:0.0.toFixed(2),
        s5:0.0.toFixed(2),
        s6:0.0.toFixed(2),
        s7:0.0.toFixed(2),
        s8:94.00.toFixed(2),
        s9:47.00.toFixed(2),
        s10:49.00.toFixed(2),
        s11:41.00.toFixed(2),
        s12:46.00.toFixed(2),
        s13:45.00.toFixed(2),
        vision:19.00.toFixed(2),
        robotics:31.00.toFixed(2),
        task:46.00.toFixed(2),
        cup1:33.00.toFixed(2),
        cup2:31.00.toFixed(2),
        cup3:33.00.toFixed(2),
        cup4:33.00.toFixed(2),
        empty:31.00.toFixed(2),
        filled:34.00.toFixed(2),
        grasp1:33.00.toFixed(2),
        grasp2:31.00.toFixed(2),
        grasp3:0.00.toFixed(2),
        left:34.00.toFixed(2),
        center:29.00.toFixed(2),
        right:33.00.toFixed(2)
    },
    {
        id:2,
        name:"Baseline (S2)", 
        score:33.00.toFixed(2), 
        s1:59.00.toFixed(2),
        s2:61.00.toFixed(2),
        s3:58.00.toFixed(2),
        s4:0.00.toFixed(2),
        s5:0.00.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:94.00.toFixed(2),
        s9:37.00.toFixed(2),
        s10:58.00.toFixed(2),
        s11:3.00.toFixed(2),
        s12:44.00.toFixed(2),
        s13:9.00.toFixed(2),
        vision:20.00.toFixed(2),
        robotics:31.00.toFixed(2),
        task:40.00.toFixed(2),
        cup1:19.00.toFixed(2),
        cup2:22.00.toFixed(2),
        cup3:26.00.toFixed(2),
        cup4:13.00.toFixed(2),
        empty:21.00.toFixed(2),
        filled:17.00.toFixed(2),
        grasp1:30.00.toFixed(2),
        grasp2:19.00.toFixed(2),
        grasp3:0.00.toFixed(2),
        left:20.00.toFixed(2),
        center:19.00.toFixed(2),
        right:18.00.toFixed(2)
    },
    {
        id:3,
        name:"SIRSIIT", 
        score:23.89.toFixed(2), 
        s1:0.00.toFixed(2),
        s2:0.00.toFixed(2),
        s3:0.00.toFixed(2),
        s4:0.00.toFixed(2),
        s5:0.00.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:0.00.toFixed(2),
        s9:72.13.toFixed(2),
        s10:75.34.toFixed(2),
        s11:73.23.toFixed(2),
        s12:63.48.toFixed(2),
        s13:70.02.toFixed(2),
        vision:0.00.toFixed(2),
        robotics:0.00.toFixed(2),
        task:71.67.toFixed(2),
        cup1:27.37.toFixed(2),
        cup2:24.32.toFixed(2),
        cup3:20.16.toFixed(2),
        cup4:23.72.toFixed(2),
        empty:23.03.toFixed(2),
        filled:24.75.toFixed(2),
        grasp1:22.76.toFixed(2),
        grasp2:23.55.toFixed(2),
        grasp3:25.37.toFixed(2),
        left:21.33.toFixed(2),
        center:23.07.toFixed(2),
        right:27.27.toFixed(2)
    },
    {
        id:4,
        name:"3DV&R Lab", 
        score:62.84.toFixed(2), 
        s1:87.63.toFixed(2),
        s2:83.89.toFixed(2),
        s3:79.32.toFixed(2),
        s4:88.65.toFixed(2),
        s5:91.85.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:22.22.toFixed(2),
        s9:98.30.toFixed(2),
        s10:100.00.toFixed(2),
        s11:43.11.toFixed(2),
        s12:93.53.toFixed(2),
        s13:70.02.toFixed(2),
        vision:88.04.toFixed(2),
        robotics:7.41.toFixed(2),
        task:93.09.toFixed(2),
        cup1:56.93.toFixed(2),
        cup2:62.42.toFixed(2),
        cup3:60.06.toFixed(2),
        cup4:62.10.toFixed(2),
        empty:62.56.toFixed(2),
        filled:58.18.toFixed(2),
        grasp1:60.57.toFixed(2),
        grasp2:60.53.toFixed(2),
        grasp3:60.02.toFixed(2),
        left:60.15.toFixed(2),
        center:60.22.toFixed(2),
        right:60.75.toFixed(2)
    },
    {
        id:5,
        name:"Robot Booster", 
        score:51.39.toFixed(2), 
        s1:99.04.toFixed(2),
        s2:29.53.toFixed(2),
        s3:61.14.toFixed(2),
        s4:48.16.toFixed(2),
        s5:96.02.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:0.00.toFixed(2),
        s9:95.56.toFixed(2),
        s10:98.25.toFixed(2),
        s11:25.59.toFixed(2),
        s12:98.26.toFixed(2),
        s13:22.88.toFixed(2),
        vision:69.14.toFixed(2),
        robotics:0.00.toFixed(2),
        task:85.02.toFixed(2),
        cup1:54.75.toFixed(2),
        cup2:50.28.toFixed(2),
        cup3:50.24.toFixed(2),
        cup4:50.28.toFixed(2),
        empty:45.98.toFixed(2),
        filled:56.80.toFixed(2),
        grasp1:51.56.toFixed(2),
        grasp2:50.97.toFixed(2),
        grasp3:51.63.toFixed(2),
        left:51.78.toFixed(2),
        center:50.85.toFixed(2),
        right:51.54.toFixed(2)
    },
    {
        id:6,
        name:"Youth2Real", 
        score:69.82.toFixed(2), 
        s1:88.27.toFixed(2),
        s2:91.66.toFixed(2),
        s3:91.70.toFixed(2),
        s4:67.09.toFixed(2),
        s5:96.93.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:88.34.toFixed(2),
        s9:90.73.toFixed(2),
        s10:99.97.toFixed(2),
        s11:80.18.toFixed(2),
        s12:100.00.toFixed(2),
        s13:98.74.toFixed(2),
        vision:84.85.toFixed(2),
        robotics:29.45.toFixed(2),
        task:95.15.toFixed(2),
        cup1:56.88.toFixed(2),
        cup2:64.12.toFixed(2),
        cup3:62.21.toFixed(2),
        cup4:56.79.toFixed(2),
        empty:57.65.toFixed(2),
        filled:62.35.toFixed(2),
        grasp1:59.97.toFixed(2),
        grasp2:60.05.toFixed(2),
        grasp3:59.98.toFixed(2),
        left:59.75.toFixed(2),
        center:60.02.toFixed(2),
        right:60.23.toFixed(2)
    },
    {
        id:7,
        name:"LARICS Gripsters", 
        score:44.98.toFixed(2), 
        s1:88.36.toFixed(2),
        s2:77.07.toFixed(2),
        s3:85.31.toFixed(2),
        s4:14.52.toFixed(2),
        s5:65.10.toFixed(2),
        s6:50.84.toFixed(2),
        s7:0.00.toFixed(2),
        s8:0.00.toFixed(2),
        s9:63.53.toFixed(2),
        s10:72.12.toFixed(2),
        s11:32.75.toFixed(2),
        s12:58.98.toFixed(2),
        s13:69.77.toFixed(2),
        vision:54.40.toFixed(2),
        robotics:16.95.toFixed(2),
        task:63.59.toFixed(2),
        cup1:46.90.toFixed(2),
        cup2:47.23.toFixed(2),
        cup3:45.91.toFixed(2),
        cup4:39.87.toFixed(2),
        empty:38.37.toFixed(2),
        filled:51.59.toFixed(2),
        grasp1:45.95.toFixed(2),
        grasp2:45.68.toFixed(2),
        grasp3:43.31.toFixed(2),
        left:42.28.toFixed(2),
        center:44.68.toFixed(2),
        right:47.97.toFixed(2)
    },
    {
        id:8,
        name:"Shakey's Legacy", 
        score:51.09.toFixed(2), 
        s1:72.35.toFixed(2),
        s2:68.26.toFixed(2),
        s3:72.55.toFixed(2),
        s4:14.89.toFixed(2),
        s5:66.77.toFixed(2),
        s6:14.87.toFixed(2),
        s7:0.00.toFixed(2),
        s8:77.93.toFixed(2),
        s9:49.08.toFixed(2),
        s10:93.73.toFixed(2),
        s11:58.01.toFixed(2),
        s12:97.57.toFixed(2),
        s13:32.67.toFixed(2),
        vision:50.91.toFixed(2),
        robotics:30.93.toFixed(2),
        task:71.42.toFixed(2),
        cup1:40.83.toFixed(2),
        cup2:43.81.toFixed(2),
        cup3:43.46.toFixed(2),
        cup4:41.61.toFixed(2),
        empty:44.02.toFixed(2),
        filled:40.84.toFixed(2),
        grasp1:42.47.toFixed(2),
        grasp2:42.02.toFixed(2),
        grasp3:42.79.toFixed(2),
        left:40.49.toFixed(2),
        center:44.72.toFixed(2),
        right:43.31.toFixed(2)
    },
    {
        id:9,
        name:"Broken Arm", 
        score:71.41.toFixed(2), 
        s1:93.13.toFixed(2),
        s2:89.88.toFixed(2),
        s3:95.82.toFixed(2),
        s4:66.84.toFixed(2),
        s5:86.24.toFixed(2),
        s6:63.76.toFixed(2),
        s7:0.00.toFixed(2),
        s8:80.80.toFixed(2),
        s9:90.34.toFixed(2),
        s10:95.14.toFixed(2),
        s11:18.77.toFixed(2),
        s12:87.74.toFixed(2),
        s13:72.30.toFixed(2),
        vision:82.01.toFixed(2),
        robotics:48.19.toFixed(2),
        task:84.04.toFixed(2),
        cup1:62.86.toFixed(2),
        cup2:63.23.toFixed(2),
        cup3:63.47.toFixed(2),
        cup4:60.18.toFixed(2),
        empty:58.88.toFixed(2),
        filled:65.99.toFixed(2),
        grasp1:63.70.toFixed(2),
        grasp2:61.41.toFixed(2),
        grasp3:62.19.toFixed(2),
        left:60.05.toFixed(2),
        center:63.54.toFixed(2),
        right:63.72.toFixed(2)
    },
    {
        id:10,
        name:"AIRLab", 
        score:10.92.toFixed(2), 
        s1:0.00.toFixed(2),
        s2:0.00.toFixed(2),
        s3:0.00.toFixed(2),
        s4:0.00.toFixed(2),
        s5:0.00.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:0.00.toFixed(2),
        s9:0.00.toFixed(2),
        s10:93.75.toFixed(2),
        s11:18.00.toFixed(2),
        s12:0.00.toFixed(2),
        s13:0.00.toFixed(2),
        vision:0.00.toFixed(2),
        robotics:0.00.toFixed(2),
        task:32.75.toFixed(2),
        cup1:11.69.toFixed(2),
        cup2:11.77.toFixed(2),
        cup3:8.57.toFixed(2),
        cup4:11.64.toFixed(2),
        empty:10.17.toFixed(2),
        filled:11.66.toFixed(2),
        grasp1:10.55.toFixed(2),
        grasp2:10.65.toFixed(2),
        grasp3:11.54.toFixed(2),
        left:11.34.toFixed(2),
        center:10.62.toFixed(2),
        right:10.80.toFixed(2)
    },
    {
        id:11,
        name:"3DV&R Lab (2)", 
        score:52.99.toFixed(2), 
        s1:87.63.toFixed(2),
        s2:83.89.toFixed(2),
        s3:79.32.toFixed(2),
        s4:0.00.toFixed(2),
        s5:91.85.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:22.22.toFixed(2),
        s9:98.30.toFixed(2),
        s10:100.00.toFixed(2),
        s11:43.11.toFixed(2),
        s12:93.53.toFixed(2),
        s13:70.02.toFixed(2),
        vision:58.49.toFixed(2),
        robotics:7.41.toFixed(2),
        task:93.09.toFixed(2),
        cup1:48.39.toFixed(2),
        cup2:51.62.toFixed(2),
        cup3:50.27.toFixed(2),
        cup4:51.83.toFixed(2),
        empty:51.58.toFixed(2),
        filled:49.47.toFixed(2),
        grasp1:50.67.toFixed(2),
        grasp2:50.66.toFixed(2),
        grasp3:50.25.toFixed(2),
        left:50.37.toFixed(2),
        center:50.35.toFixed(2),
        right:50.85.toFixed(2)
    },
    {
        id:12,
        name:"IITGN Robotics", 
        score:10.12.toFixed(2), 
        s1:59.77.toFixed(2),
        s2:49.46.toFixed(2),
        s3:53.50.toFixed(2),
        s4:0.00.toFixed(2),
        s5:0.00.toFixed(2),
        s6:0.00.toFixed(2),
        s7:0.00.toFixed(2),
        s8:0.00.toFixed(2),
        s9:4.30.toFixed(2),
        s10:32.50.toFixed(2),
        s11:0.00.toFixed(2),
        s12:0.00.toFixed(2),
        s13:0.00.toFixed(2),
        vision:18.08.toFixed(2),
        robotics:0.00.toFixed(2),
        task:12.27.toFixed(2),
        cup1:10.88.toFixed(2),
        cup2:11.17.toFixed(2),
        cup3:6.50.toFixed(2),
        cup4:11.92.toFixed(2),
        empty:10.12.toFixed(2),
        filled:10.12.toFixed(2),
        grasp1:9.99.toFixed(2),
        grasp2:10.04.toFixed(2),
        grasp3:10.32.toFixed(2),
        left:10.06.toFixed(2),
        center:9.75.toFixed(2),
        right:9.74.toFixed(2)
    }
];

// ///////////////////////////////////////////////////////////////////////////
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     const form = event.currentTarget;
//     const url = new URL(form.action);
//     const formData = new FormData(form);
//     const searchParams = new URLSearchParams(formData);

//     const fetchOptions = {
//       method: form.method,
//     };

//     if (form.method.toLowerCase() === 'post') {
//         if (form.enctype === 'multipart/form-data') {
//           fetchOptions.body = formData;
//         } else {
//           fetchOptions.body = searchParams;
//         }
//       } else {
//         url.search = searchParams;
//       }

//     fetch(url, fetchOptions);

//     event.preventDefault();
// }
