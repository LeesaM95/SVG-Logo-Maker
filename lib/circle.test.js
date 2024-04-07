const shape = new Circle();

shape.setColor("#3F888F")
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="#3F888F" />')