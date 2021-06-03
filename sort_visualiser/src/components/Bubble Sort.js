const bubbleSort = (arr, elements)=>{
    for(let i=0; i<arr.lenght; i++){
        let v = arr[i];
        for(let j=i; j<arr.lenght; j++){
            if(arr[j]<v){
                let temp = v;
                v = arr[j];
                arr[j] = temp;
                temp=elements[i];
                elements[i] = elements[j];
                elements[j] = temp;
            }
        }
    }
}