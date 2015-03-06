describe("Centralized event dispatcher pattern", function(){
  
  it("Listens to EventDispatcher: 'counter' event", function(){

    expect(dataObject.counter).to.equal(0)

    EventDispatcher.trigger("addition")
    expect(dataObject.counter).to.equal(1)

    EventDispatcher.trigger("addition")
    expect(dataObject.counter).to.equal(2)

  })

  it("Listens to EventDispatcher: 'flick' event", function(){

    expect(dataObject.switch).to.equal(false)

    EventDispatcher.trigger("flick")
    expect(dataObject.switch).to.equal(true)

    EventDispatcher.trigger("flick")
    expect(dataObject.switch).to.equal(false)

  })

  it("Listens to EventDispatcher: 'siren' event", function(done){

    dataObject.amplify = done

    EventDispatcher.trigger("siren")

  })

  it("Listens to EventDispatcher: 'change-amplify' event", function(done){

    dataObject.amplify = function(){}

    EventDispatcher.trigger("change-amplify", done)

    dataObject.amplify()

  })

})