
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Papa from 'papaparse';
function Abt() {
  
    function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const location = data.get('location');
      const x = data.get('x');
      const y = data.get('y');
      const z = data.get('z');
      console.log(location, x, y, z);
      //loading data by papaparse
      Papa.parse('/layout.csv',{
        download: true,
        header: true,
        dynamicTyping: true,
        //appending the data to the csv file
        complete: function (results) {
          var oldata = results.data;
          //appending the data to the csv file
          oldata.push({location: location, x: x, y: y, z: z});
          console.log(oldata);
          //converting the data to csv
          const csv = Papa.unparse(oldata);
          //saving the data to the old layout.csv file
            const blob = new Blob([csv], {type: 'text/csv'});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'layout.csv';
            link.click();

          
          
        }
      });
    };
      
     

    return (
      <Form style={{ paddingLeft: '20px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" placeholder="Enter location" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="x">
          <Form.Label>X</Form.Label>
          <Form.Control type="text" name="x" placeholder="Enter X" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="y">
          <Form.Label>Y</Form.Label>
          <Form.Control type="text" name="y" placeholder="Enter Y" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="z">
          <Form.Label>Z</Form.Label>
          <Form.Control type="text" name="z" placeholder="Enter Z" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  
}
  export default Abt;

