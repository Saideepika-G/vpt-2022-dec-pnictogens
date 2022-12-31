
var counter=1;
console.log(counter);
var resourcefolder='images/image';
var imagediv,src,one,two,three,four,five,six,val1,val2,val3,val4,val5,val6;
var srch,src1,src2,src3,src4,src5,src6;

function prev(){
    if(counter>1)
    {
        counter--;
    }
    console.log(counter);
    imagediv=document.getElementById("highlight");
    one=document.getElementById("one");
    two=document.getElementById("two");
    three=document.getElementById("three");
    four=document.getElementById("four");
    five=document.getElementById("five");
    six=document.getElementById("six");

    val1=(counter+1)%7;
    val2=(counter+2)%7;
    val3=(counter+3)%7;
    val4=(counter+4)%7;
    val5=(counter+5)%7;
    val6=(counter+6)%7;

    srch="url('images/image"+counter+".png')";
    src1="url('images/image"+val1+".png')";
    src2="url('images/image"+val2+".png')";
    src3="url('images/image"+val3+".png')";
    src4="url('images/image"+val4+".png')";
    src5="url('images/image"+val5+".png')";
    src6="url('images/image"+val6+".png')";
   


    imagediv.style.backgroundImage = srch;
    imagediv.style.transition='0.5s';
    one.style.backgroundImage=src1;
    two.style.backgroundImage=src2;
    three.style.backgroundImage=src3;
    four.style.backgroundImage=src4;
    five.style.backgroundImage=src5;
    six.style.backgroundImage=src6;

}

function next(){
    if(counter<7)
    {
        counter++;
    }
    console.log(counter);
    imagediv=document.getElementById("highlight");
    one=document.getElementById("one");
    two=document.getElementById("two");
    three=document.getElementById("three");
    four=document.getElementById("four");
    five=document.getElementById("five");
    six=document.getElementById("six");

     val1=(counter+1)%7;
    val2=(counter+2)%7;
    val3=(counter+3)%7;
    val4=(counter+4)%7;
    val5=(counter+5)%7;
    val6=(counter+6)%7;

    srch="url('images/image"+counter+".png')";
    src1="url('images/image"+val1+".png')";
    src2="url('images/image"+val2+".png')";
    src3="url('images/image"+val3+".png')";
    src4="url('images/image"+val4+".png')";
    src5="url('images/image"+val5+".png')";
    src6="url('images/image"+val6+".png')";
   


    imagediv.style.backgroundImage = srch;
    imagediv.style.transition='0.5s ease';
    one.style.backgroundImage=src1;
    two.style.backgroundImage=src2;
    three.style.backgroundImage=src3;
    four.style.backgroundImage=src4;
    five.style.backgroundImage=src5;
    six.style.backgroundImage=src6;

}
