describe("Hard Mode! String Reverse", function(){
  
    it("reverses contents of a single-word string", function(){

      expect(reverseWord("hello")).to.equal("olleh");
      expect(reverseWord("testing")).to.equal("gnitset");
      expect(reverseWord("")).to.equal("");

    });

    it("reverses each word in a multi-word string", function(){

      expect(reverseSentence("one two three four")).to.equal("eno owt eerht ruof");
      expect(reverseSentence("hello, world")).to.equal(",olleh dlrow");
      expect(reverseSentence("use an array")).to.equal("esu na yarra");

    });

});