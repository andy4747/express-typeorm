start-api:
	docker build -t shelve-backend-api .
	docker-compose up

stop-api-hard:
	docker-compose down
	docker image remove shelve-backend-api
	./rmvol.sh

stop-api-soft:
	docker-compose down

remove-volume:
	sudo rm -rf ./shelve_data
