main.remove();

// const newHeader = document.querySelectorAll('h1 victory');

// 1) index.html
//        after index.js is processed
//          has a 'newHeader' variable that points to node 'h1#victory':
//      AssertionError: Make sure you create an <h1> with id 'victory': expected undefined to deeply equal 'H1'

// createNewHeder("")

// it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
//     expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
//   });


const newHeader = document.createElement('h1');

newHeader.id = 'victory'

newHeader.textContent = "Brian is the champion"

document.body.append(newHeader);
