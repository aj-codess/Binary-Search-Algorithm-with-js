let target_arr=[92, 14, 67, 41, 55, 82, 19, 73, 6, 38,8,100,24,243,24,232,2424,4242435,36464643,34643643646];
const find=100;

let sorting_algo=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    };
    return arr;
};

let mid_checks=(arr)=>{
    let mid;
    if(arr.length%2==1){
        mid=(arr.length-1)/2;
    } else{
        mid=arr.length/2;
    }
    return mid
};

let mid_num=(arr,pos)=>{
    let num;
    num=arr[pos];
    return num;
};

let checksFun=(pool,mid_index,num,mid)=>{
    if(pool.length>2){
        if(num>mid){
            striped=new Array();
            for(let i=mid_index;i<pool.length;i++){
                striped.push(pool[i]);
            };
            console.log(striped);
            checksFun(striped,mid_checks(striped),num,mid_num(striped,mid_checks(striped)));
        } else if(num<mid){
            striped=new Array();
            for(let i=0;i<mid_index;i++){
                striped.push(pool[i]);
            };
            console.log(striped)
            checksFun(striped,mid_checks(striped),num,mid_num(striped,mid_checks(striped)));
        } else if(mid==num){
            console.log(true);
        }
    } else {
            pool.includes(num)?console.log("true\tNumber Found!!"):console.log("false\t Number Not Found!!")
    }
};
checksFun(sorting_algo(target_arr),mid_checks(target_arr),find,mid_num(target_arr,mid_checks(target_arr)));