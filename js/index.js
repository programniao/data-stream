const canvas = document.getElementById('canvas');
    // 获取二维画布权限
    const can = canvas.getContext('2d');

    // 获取屏幕对象
    const s = window.screen;
    let w = s.width;
    let h = s.height;
    // 将值赋给canvas
    canvas.width = w;
    canvas.height = h;

    // 字体大小变量
    const fontsize = 24;
    // 存数据的数组
    const diop = [];
    const str = "QWERTYUIOPASDFGHJKLZXCVBNM";

    // 求一行的字体个数
    let cipl = Math.floor(w / fontsize);
    
    // 循环将0push到diop
    for(let i = 0; i < cipl; i++){
        diop.push(0);
    }

    function drawStrong() {  
        // 矩形颜色
        can.fillStyle = 'rgba(0,0,0,0.05)';
        // 画一个矩形
        can.fillRect(0, 0, w, h);
        // 字体大小
        can.font  = '600 ' +fontsize+'px'+ '微软雅黑';
        // 字体颜色
        can.fillStyle = '#00ff00';
      
       
        for(let i = 0; i < cipl; i++){
            // x轴
            let x = i*fontsize;

            // y轴
            let y = diop[i]*fontsize;

             // 显示文字 str是字符串 通过mathfloor mathrandom方法
            can.fillText(str[Math.floor(Math.random()*str.length)],x,y);

            // 判断纵坐标大于高 并且 大于0.99小于1的数让他重新显示
            if(y > h && Math.random()>0.99){
                diop[i] = 0;
            }
            // 让他从上往下加
            diop[i]++;
        }
    }
    setInterval(drawStrong, 50);