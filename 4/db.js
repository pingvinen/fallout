var dbString = JSON.stringify({
	"tables": [{
		"name": "merchants",
		"columns": [{
			"name": "name"
		}, {
			"name": "location"
		}, {
			"name": "_id"
		}],
		"rows": [{
			"values": {
				"name": "Trashcan Carla",
				"location": "travelling",
				"_id": "trashcancarla"
			}
		}, {
			"values": {
				"name": "Greene",
				"location": "Graygarden",
				"_id": "greene"
			}
		}]
	}, {
		"name": "shipments",
		"columns": [{
			"name": "item"
		}, {
			"name": "shipmentQuantity"
		}, {
			"name": "quantity"
		}, {
			"name": "merchantId"
		}, {
			"name": "_id"
		}],
		"rows": [{
			"values": {
				"item": "Circuitry",
				"shipmentQuantity": 25,
				"quantity": 1,
				"merchantId": "trashcancarla",
				"_id": "uuid1"
			}
		}, {
			"values": {
				"item": "Oil",
				"shipmentQuantity": 25,
				"quantity": 1,
				"merchantId": "trashcancarla",
				"_id": "uuid2"
			}
		}, {
			"values": {
				"item": "Fertilizer",
				"shipmentQuantity": 25,
				"quantity": 1,
				"merchantId": "greene",
				"_id": "uuid3"
			}
		}]
	}]
});
