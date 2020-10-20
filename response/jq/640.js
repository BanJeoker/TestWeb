$(function(){
             var obj;
             var id;


             // $("#content").fitVids();
             // alert("dfs");
             $(".navli").mouseover(function() {
                // alert("222222");
                id=$(this).attr("id");
                id=id.substring(5);
                id="#tipp"+id;
                
                $(id).show();
               // alert("message");

                // obj.next("div").show();
                // alert("message");
                // $(".tip1").show();
                // obj.show();
                /* Act on the event */
                // alert("message");
             });
             $(".navli").mouseout(function() {
                // alert("222222");
               id=$(this).attr("id");
                id=id.substring(5);
                id="#tipp"+id;
                
                $(id).hide();
                // $(".tip1").hide();
                // obj.show();
                /* Act on the event */
                // alert("message");
             });
             // alert("message");
             



          })