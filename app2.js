const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write(' <th>Number of Hours</th> ')
      res.write(' <th>Amount</th> ')
      res.write('</tr> ')
      res.write('<tr> ')
      res.write(' <td>Indonesia</td> ')
      res.write('<td>20</td> ')
      res.write('<td>$10/hour</td> ')
      res.write('</tr> ')
      res.write('<tr> ')
      res.write(' <td>Philippines</td> ')
      res.write(' <td>70</td> ')
      res.write(' <td>$35/hour</td> ')
      res.write('</tr> ')
      res.write('<tr> ')
      res.write('<td>Malaysia</td> ')
      res.write('<td>80</td> ')
      res.write(' <td>$45/hour</td> ')
      res.write('</tr> ')
      res.write('<tr> ')
      res.write(' <td>Goa</td>')
      res.write(' <td>90</td> ')
      res.write(' <td>$46/hour</td> ')
      res.write('</tr> ')
      res.write('</table> ')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})