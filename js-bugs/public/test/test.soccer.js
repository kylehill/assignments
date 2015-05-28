describe("Assignment 08 - Fix the bugs", function(){

  describe("addTeam", function(){

    it("should add teams successfully", function(){

      league.addTeam("Real Madrid")
      league.addTeam("Barcelona")

      expect( league.teamList.length ).to.equal( 2 )

    })

    it("should create objects with properties", function(){

      league.addTeam("Bayern Munich")

      expect( league.teamList.length ).to.equal( 1 )

      expect( league.teamList[0] ).to.deep.equal({
        name: "Bayern Munich",
        wins: 0,
        losses: 0,
        ties: 0,
        points: 0
      })

    })

  })

  describe("findTeam", function(){

    it("should find an existing team", function(){

      league.addTeam("DC United")
      league.addTeam("Philadephia Union")
      league.addTeam("Columbus Crew")

      expect( league.findTeam("Columbus Crew") ).to.be.an("object")
      expect( league.findTeam("Columbus Crew").wins ).to.equal(0)

    })

    it("should return false for non-existent teams", function(){

      league.addTeam("DC United")
      league.addTeam("Philadephia Union")
      league.addTeam("Columbus Crew")

      expect( league.findTeam("Tampa Bay Mutiny") ).to.equal(false)

    })

  })

  describe("addResult", function(){

    it("should add wins (and modify points)", function(){

      league.addTeam("Manchester United")
      league.addTeam("Liverpool")
      league.addTeam("Chelsea")

      league.addResult("Liverpool", "Chelsea")
      league.addResult("Chelsea", "Manchester United")
      league.addResult("Chelsea", "Liverpool")

      expect( league.findTeam("Chelsea").wins ).to.equal(2)
      expect( league.findTeam("Chelsea").points ).to.equal(6)

    })

    it("should add losses", function(){

      league.addTeam("Newcastle United")
      league.addTeam("West Ham United")
      league.addTeam("Stoke City")
      league.addTeam("Queens Park Rangers")
      league.addTeam("Hull City")

      league.addResult("West Ham United", "Newcastle United")
      league.addResult("Stoke City", "Newcastle United")
      league.addResult("Queens Park Rangers", "Newcastle United")
      league.addResult("Hull City", "Newcastle United") // sigh... it was a long year
      
      expect( league.findTeam("Newcastle United").losses ).to.equal(4)
      expect( league.findTeam("Newcastle United").points ).to.equal(0)

    })

    it("should return false if either team doesn't exist", function(){

      league.addTeam("Portland Timbers")
      league.addTeam("Seattle Sounders")

      expect( league.addResult("Portland Timbers", "Seattle Sounders") ).to.equal(true)
      expect( league.addResult("Portland Timbers", "Miami Fusion") ).to.equal(false)
      expect( league.addResult("Chivas USA", "Seattle Sounders") ).to.equal(false)
      expect( league.addResult("Atlanta Silverbacks", "Minnesota United") ).to.equal(false)

    })

  })

  describe("addDraw", function(){

    it("should add ties (and modify points)", function(){

      league.addTeam("Manchester United")
      league.addTeam("Liverpool")
      league.addTeam("Chelsea")

      league.addDraw("Liverpool", "Chelsea")
      league.addDraw("Chelsea", "Manchester United")
      
      expect( league.findTeam("Chelsea").ties ).to.equal(2)
      expect( league.findTeam("Chelsea").points ).to.equal(2)

    })

    it("should return false if either team doesn't exist", function(){

      league.addTeam("Portland Timbers")
      league.addTeam("Seattle Sounders")

      expect( league.addDraw("Portland Timbers", "Seattle Sounders") ).to.equal(true)
      expect( league.addDraw("Portland Timbers", "Miami Fusion") ).to.equal(false)
      expect( league.addDraw("Chivas USA", "Seattle Sounders") ).to.equal(false)
      expect( league.addDraw("Atlanta Silverbacks", "Minnesota United") ).to.equal(false)

    })

  })

  describe("standings", function(){

    it("should return standings", function(){

      league.addTeam("Toluca")
      league.addTeam("Cruz Azul")
      league.addTeam("Atlas")
      league.addTeam("Monterrey")

      league.addResult("Cruz Azul", "Atlas")
      league.addDraw("Toluca", "Monterrey")

      league.addResult("Atlas", "Toluca")
      league.addDraw("Cruz Azul", "Monterrey")

      expect( league.standings() ).to.be.an("array")
      expect( league.standings().length ).to.equal(4)
      expect( league.standings()[0] ).to.equal("Cruz Azul | 1-0-1 | 4")

    })

  })

  // Before every test suite (starting with "it"),
  // run this function..
  beforeEach(function(){
    
    // This means that every test starts with a brand new universe
    // So the previous tests don't affect anything
    if (window.resetLeague) {
      resetLeague()
    }

    

  })

})