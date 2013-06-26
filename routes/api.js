var data ={"trades": [
  {
    "id": 1,
    "pop": 0.5,
    "legs": [
    	{
	    	"type": "stock",
	    	"symbol": "FB",
	    	"qty": 100,
	    	"openAmount": -2456.30,
	    	"closeAmount": null,
	    	"openedAt": "2013-06-02T10:47:12",
    		"closedAt": "2013-06-02T10:47:12"
    	}
    ]
	},
	{
    "id": 2,
    "pop": 0.70,
    "legs": [
    	{
	    	"type": "call",
	    	"symbol": "POT",
	    	"qty": -1,
	    	"strike": 40,
	    	"openAmount": 0.90,
	    	"closeAmount": null,
	    	"openedAt": "2013-06-02T10:47:12",
    		"closedAt": null
    	},
    	{
	    	"type": "call",
	    	"symbol": "POT",
	    	"qty": 1,
	    	"strike": 41,
	    	"openAmount": -0.60,
	    	"closeAmount": null,
	    	"openedAt": "2013-06-02T10:47:12",
    		"closedAt": null
    	}
    ]
	},
	{
    "id": 3,
    "pop": 0.66,
    "legs": [
    	{
	    	"type": "put",
	    	"symbol": "X",
	    	"qty": -1,
	    	"strike": 14,
	    	"openAmount": 0.90,
	    	"closeAmount": -0.60,
	    	"openedAt": "2013-06-02T10:47:12",
    		"closedAt": null
    	}
    ]
	}
]
}

exports.trades = function (req, res) {
  res.json({
  	trades: data.trades
  });
};

exports.trade = function (req, res){
	var id = req.params.id;
	res.json({
		trade: data.trades[id]
	});
};