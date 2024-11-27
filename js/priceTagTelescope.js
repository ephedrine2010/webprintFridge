//------This script written by M.Shanab April 2023 ------//
//------Feel free to update this script ------//
//------Regards -----ephedrine2010@gmail.com ------//
$(document).ready(function() {
    processUrlText();
  });
  
  const items = [];

    async function processUrlText(){
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      let text= urlParams.get('text');
      
      /*
      text=`
        46546456645,amaryl 3mg 30 tab,98573894755 , 202412 **
        46546456645,amaryl 3mg 30 tab test big line,98573894755 , 202412 **
        46546456645,amaryl 3mg 30 tab,98573894755 , 202412 **
        46546456645,amaryl 3mg 30 tab,98573894755 , 202412 **
        46546456645,amaryl 3mg 30 tab,98573894755 , 202412 **
      `;*/

      var receivedData=text.split("**");

      
      for(let i=0;i<receivedData.length;i++){
       
        var subxItem=receivedData[i].split(",");

        items.push({
          sku: subxItem[0],
          name_en:subxItem[1],
          barcode: subxItem[2],
          exp_date: subxItem[3],
        });

      }

          items.pop();

      let tbl='';
      tbl=tbl_header;
      items.forEach(item => {
        tbl += createHTML(item);
      });

      tbl +=tbl_footer;
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML=tbl;
    }

    //-------------------------------------------------

      
  
      tbl_header=`
      <div class="col-lg-12" style="height:fit-content">
            <table id="tblfride" class="table bigTable table-hover justify-content-center sortable" style="margin:auto;">
              <thead>
                <tr>
                    <th>sku</th>
                    <th>Item name</th>
                    <th>Barcode</th>
                    <th>Expire Date</th>
                </tr>
            </thead>
            <tbody>
      `;

      tbl_footer=`
              </tbody>
            </table>
          </div>
      `;
          
      //price template function
      function createHTML(item) {
        return`
                <tr >
                  <td style="font-size:small;">${item.sku}</td>
                  <td style="font-size:small;">${item.name_en}</td>
                  <td style="font-size:small;">${item.barcode}</td>
                  <td style="font-size:small;">${item.exp_date}</td>
                </tr>
          `
      }
        