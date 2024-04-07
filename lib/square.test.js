const shape = new Square();
shape.setColor("pink");
expect(shape.render()).toEqual('<rect x="30" y="30" width="240" height="140" fill="pink" />');
