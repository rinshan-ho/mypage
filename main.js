function yoko(){
    let obj = document.getElementById('select');
    console.log('yoko');
    console.log(obj);

    let images = [];
    let cnt_loaded = 1;
    let cnt_added  = 0;

    let canvas = document.getElementById('canvas');
    canvas.width  = 0;
    canvas.height = 0;
    let ctx = canvas.getContext('2d');
    
    for(const file of obj.files){
        const no = cnt_added;
        const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            images[no] = new Image();
            images[no].src = reader.result;
            console.log(images[no].src);
            
            images[no].addEventListener('load', ()=>{
                if(cnt_loaded == obj.files.length){
                    let w_max, h_max;
                    for (const image of images) {
                        if(w_max==undefined || h_max==undefined){
                            w_max = image.width;
                            h_max = image.height;
                        }
                        // 画像の縦幅の最小幅を設定
                        if(image.height < h_max) {
                            w_max = image.width;
                            h_max = image.height;
                        }
                    }

                    canvas.height=h_max;
                    for(const image of images){
                        console.log('image_width x image_height: ' + image.width + ' x ' + image.height);
                        canvas.width+= image.width*(h_max/image.height);

                    }

                    let dx=0, dy=0;
                    for(const image of images){
                        console.log(dx, dy)
                        ctx.drawImage(image, 0, 0, image.width, image.height, dx, dy, image.width*(h_max/image.height), image.height*(h_max/image.height));
                        dx+=image.width*(h_max/image.height);
                        console.log(dx, dy)
                    }
                    console.log('width x height: ' + canvas.width + ' x ' + canvas.height);

                }
                cnt_loaded++;
            });
        });
        reader.readAsDataURL(file);
        cnt_added++;
    }
}

function tate(){
    let obj = document.getElementById('select');
    console.log('yoko');
    console.log(obj);
    let images = [];
    let cnt_loaded = 1;
    let cnt_added  = 0;

    let canvas = document.getElementById('canvas');
    canvas.width  = 0;
    canvas.height = 0;
    let ctx = canvas.getContext('2d');
    
    for(const file of obj.files){
        const no = cnt_added;
        const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            images[no] = new Image();
            images[no].src = reader.result;
            console.log(images[no].src);
            
            images[no].addEventListener('load', ()=>{
                if(cnt_loaded == obj.files.length){
                    let w_max, h_max;
                    for (const image of images) {
                        if(w_max==undefined || h_max==undefined){
                            w_max = image.width;
                            h_max = image.height;
                        }
                        // 画像の横幅の最小幅を設定
                        if(image.width < w_max) {
                            w_max = image.width;
                            h_max = image.height;
                        }
                    }

                    canvas.width=w_max;
                    for(const image of images){
                        console.log('image_width x image_height: ' + image.width + ' x ' + image.height);
                        canvas.height+=image.height*(w_max/image.width);

                    }

                    let dx=0, dy=0;
                    for(const image of images){
                        console.log(dx, dy)
                        ctx.drawImage(image, 0, 0, image.width, image.height, dx, dy, image.width*(w_max/image.width), image.height*(w_max/image.width));
                        dy+=image.height*(w_max/image.width);
                        console.log(dx, dy)
                    }
                    console.log('width x height: ' + canvas.width + ' x ' + canvas.height);

                }
                cnt_loaded++;
            });
        });
        reader.readAsDataURL(file);
        cnt_added++;
    }
}

// ダウンロード機能
document.getElementById("download").onclick = () => {
    let canvas = document.getElementById("canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "combined.png";
    link.click();
}