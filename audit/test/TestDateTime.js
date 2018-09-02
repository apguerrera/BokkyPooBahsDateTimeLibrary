var testDateTimeOutput={
  "contracts" : 
  {
    "BokkyPooBahsDateTimeLibrary.sol:BokkyPooBahsDateTimeLibrary" : 
    {
      "abi" : "[]",
      "bin" : "604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820a08d0ee62d378eeea2f6ab903a364f4a61090fcc7a6ea88f03c87931c1197fc00029"
    },
    "TestDateTime.sol:TestDateTime" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_hours\",\"type\":\"uint256\"}],\"name\":\"subHours\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffMinutes\",\"outputs\":[{\"name\":\"_minutes\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDaysInMonth\",\"outputs\":[{\"name\":\"daysInMonth\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextYear\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"}],\"name\":\"timestampFromDate\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDayOfWeek\",\"outputs\":[{\"name\":\"dayOfWeek\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffHours\",\"outputs\":[{\"name\":\"_hours\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getHour\",\"outputs\":[{\"name\":\"hour\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"}],\"name\":\"_getDaysInMonth\",\"outputs\":[{\"name\":\"daysInMonth\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_months\",\"type\":\"uint256\"}],\"name\":\"addMonths\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"isWeekEnd\",\"outputs\":[{\"name\":\"weekEnd\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_years\",\"type\":\"uint256\"}],\"name\":\"addYears\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_years\",\"type\":\"uint256\"}],\"name\":\"subYears\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_hours\",\"type\":\"uint256\"}],\"name\":\"addHours\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"},{\"name\":\"hour\",\"type\":\"uint256\"},{\"name\":\"minute\",\"type\":\"uint256\"},{\"name\":\"second\",\"type\":\"uint256\"}],\"name\":\"timestampFromDateTime\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffSeconds\",\"outputs\":[{\"name\":\"_seconds\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDay\",\"outputs\":[{\"name\":\"day\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_days\",\"type\":\"uint256\"}],\"name\":\"addDays\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffMonths\",\"outputs\":[{\"name\":\"_months\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_minutes\",\"type\":\"uint256\"}],\"name\":\"addMinutes\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getSecond\",\"outputs\":[{\"name\":\"second\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_seconds\",\"type\":\"uint256\"}],\"name\":\"addSeconds\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getYear\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_minutes\",\"type\":\"uint256\"}],\"name\":\"subMinutes\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getMonth\",\"outputs\":[{\"name\":\"month\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_months\",\"type\":\"uint256\"}],\"name\":\"subMonths\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"}],\"name\":\"_isLeapYear\",\"outputs\":[{\"name\":\"leapYear\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"isLeapYear\",\"outputs\":[{\"name\":\"leapYear\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_days\",\"type\":\"uint256\"}],\"name\":\"subDays\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffDays\",\"outputs\":[{\"name\":\"_days\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"isWeekDay\",\"outputs\":[{\"name\":\"weekDay\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"timestampToDate\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"timestampToDateTime\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"},{\"name\":\"hour\",\"type\":\"uint256\"},{\"name\":\"minute\",\"type\":\"uint256\"},{\"name\":\"second\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_seconds\",\"type\":\"uint256\"}],\"name\":\"subSeconds\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"test\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getMinute\",\"outputs\":[{\"name\":\"minute\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffYears\",\"outputs\":[{\"name\":\"_years\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}]",
      "bin" : "608060405234801561001057600080fd5b50610e98806100206000396000f3006080604052600436106101cb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166250155381146101d057806302e98e0d146101fd57806310848ddf14610218578063146bea7b146102305780631f4f77b21461024557806322f8a2b8146102635780632af123b81461027b5780633e239e1a146102965780633f9e0eb7146102ae5780634355644d146102c95780634371c465146102e4578063442b8c7914610310578063444fda821461032b5780634b321502146103465780635e05bd6d1461036157806362fb96971461038857806365c72840146103a35780637217523c146103bb5780637be34109146103d657806389a3a00d146103f15780638aa001fc1461040c5780638d4a2d391461042457806392d663131461043f5780639e524caa14610457578063a324ad2414610472578063ad203bd41461048a578063b05eb08d146104a5578063b8d16dbc146104bd578063c7b6fd6a146104d5578063c9d34622146104f0578063d6582d0d1461050b578063de5101af14610523578063ea1c169014610559578063f615ed54146105a4578063f8a8fd6d146105bf578063fa93f883146105d6578063ff2258cb146105ee575b600080fd5b3480156101dc57600080fd5b506101eb600435602435610609565b60408051918252519081900360200190f35b34801561020957600080fd5b506101eb60043560243561061c565b34801561022457600080fd5b506101eb600435610628565b34801561023c57600080fd5b506101eb610639565b34801561025157600080fd5b506101eb60043560243560443561063f565b34801561026f57600080fd5b506101eb600435610654565b34801561028757600080fd5b506101eb60043560243561065f565b3480156102a257600080fd5b506101eb60043561066b565b3480156102ba57600080fd5b506101eb600435602435610676565b3480156102d557600080fd5b506101eb600435602435610682565b3480156102f057600080fd5b506102fc60043561068e565b604080519115158252519081900360200190f35b34801561031c57600080fd5b506101eb600435602435610699565b34801561033757600080fd5b506101eb6004356024356106a5565b34801561035257600080fd5b506101eb6004356024356106b1565b34801561036d57600080fd5b506101eb60043560243560443560643560843560a4356106bd565b34801561039457600080fd5b506101eb6004356024356106d8565b3480156103af57600080fd5b506101eb6004356106e4565b3480156103c757600080fd5b506101eb6004356024356106ef565b3480156103e257600080fd5b506101eb6004356024356106fb565b3480156103fd57600080fd5b506101eb600435602435610707565b34801561041857600080fd5b506101eb600435610713565b34801561043057600080fd5b506101eb60043560243561071e565b34801561044b57600080fd5b506101eb60043561072a565b34801561046357600080fd5b506101eb600435602435610735565b34801561047e57600080fd5b506101eb600435610741565b34801561049657600080fd5b506101eb60043560243561074c565b3480156104b157600080fd5b506102fc600435610758565b3480156104c957600080fd5b506102fc600435610763565b3480156104e157600080fd5b506101eb60043560243561076e565b3480156104fc57600080fd5b506101eb60043560243561077a565b34801561051757600080fd5b506102fc600435610786565b34801561052f57600080fd5b5061053b600435610791565b60408051938452602084019290925282820152519081900360600190f35b34801561056557600080fd5b506105716004356107ac565b604080519687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b3480156105b057600080fd5b506101eb6004356024356107d2565b3480156105cb57600080fd5b506105d46107de565b005b3480156105e257600080fd5b506101eb6004356107f6565b3480156105fa57600080fd5b506101eb600435602435610801565b6000610615838361080d565b9392505050565b60006106158383610821565b60006106338261083e565b92915050565b60005481565b600061064c84848461086c565b949350505050565b600061063382610886565b60006106158383610899565b6000610633826108b3565b600061061583836108c1565b60006106158383610947565b6000610633826109bd565b600061061583836109d2565b600061061583836109f8565b60006106158383610a53565b60006106cd878787878787610a67565b979650505050505050565b60006106158383610a91565b600061063382610aa5565b60006106158383610ac0565b60006106158383610ad5565b60006106158383610b29565b600061063382610b3c565b60006106158383610b43565b600061063382610b53565b60006106158383610b6f565b600061063382610b82565b60006106158383610b9d565b600061063382610c1e565b600061063382610c43565b60006106158383610c65565b60006106158383610c7a565b600061063382610c95565b600080600061079f84610caa565b9196909550909350915050565b6000806000806000806107be87610cbb565b949c939b5091995097509550909350915050565b60006106158383610cfc565b426107f081600163ffffffff6109d216565b60005550565b600061063382610d0c565b60006106158383610d1b565b610e10810282038281111561063357600080fd5b60008183111561083057600080fd5b603c8383035b049392505050565b600080808061085262015180865b04610d63565b9194509250905061086383836108c1565b95945050505050565b60006201518061087d858585610df8565b02949350505050565b6007620151809091046003010660010190565b6000818311156108a857600080fd5b610e10838303610836565b610e10620151809091060490565b600081600114806108d25750816003145b806108dd5750816005145b806108e85750816007145b806108f35750816008145b806108fe575081600a145b80610909575081600c145b156109165750601f610633565b600282146109265750601e610633565b61092f83610c1e565b61093a57601c61093d565b601d5b60ff169392505050565b60008080808061095a620151808861084c565b600c9189016000190182810493909301965091066001019350915061097f84846108c1565b90508082111561098d578091505b620151808706620151806109a2868686610df8565b02019450868510156109b357600080fd5b5050505092915050565b600060066109ca83610886565b101592915050565b6000808080806109e5620151808861084c565b91880195509350915061097f84846108c1565b600080808080610a0b620151808861084c565b91889003955093509150610a1f84846108c1565b905080821115610a2d578091505b62015180870662015180610a42868686610df8565b02019450868511156109b357600080fd5b610e10810282018281101561063357600080fd5b600081603c8402610e10860262015180610a828b8b8b610df8565b02010101979650505050505050565b600081831115610aa057600080fd5b500390565b60008080610ab6620151808561084c565b9695505050505050565b62015180810282018281101561063357600080fd5b600080808080808087891115610aea57600080fd5b610af7620151808a61084c565b91975095509350610b0b620151808961084c565b50600c97880297909102019590950393909303979650505050505050565b603c810282018281101561063357600080fd5b603c900690565b8181018281101561063357600080fd5b60008080610b64620151808561084c565b509095945050505050565b603c810282038281111561063357600080fd5b60008080610b93620151808561084c565b5095945050505050565b60008080808080610bb1620151808961084c565b91965094509250600c808602850188900360001901925082049450600c82066001019350610bdf85856108c1565b905080831115610bed578092505b62015180880662015180610c02878787610df8565b0201955087861115610c1357600080fd5b505050505092915050565b600060048206158015610c3357506064820615155b8061063357505061019090061590565b6000808080610c55620151808661084c565b9194509250905061086383610c1e565b62015180810282038281111561063357600080fd5b600081831115610c8957600080fd5b62015180838303610836565b60006005610ca283610886565b111592915050565b6000808061079f620151808561084c565b6000808080808080610cd0620151808961084c565b919a9099919850610e10620151809092068281049850603c929006828104975091909106945092505050565b8082038281111561063357600080fd5b6000610e108206603c81610836565b600080808080808087891115610d3057600080fd5b610d3d620151808a61084c565b91975095509350610d51620151808961084c565b50509590950398975050505050505050565b60008080836226496581018280808062023ab1600486020593506004600362023ab1860201059094039362164b09610fa0600187010205925060046105b58402058503601f01945061098f85605002811515610dbb57fe5b059150605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b6000808080806107b2881015610e0d57600080fd5b50505050600460036064611324600c600d198801819005988901918201929092059290920283900561016f9782029096036001190196909602959095056105b56112c090960195909502059190910192909201036225bad619019190505600a165627a7a72305820895c815c36f36e0541d02431bebda8c2346c021604e7a801ea4ced3bc426dcc30029"
    }
  },
  "version" : "0.4.23+commit.124ca40d.Darwin.appleclang"
};