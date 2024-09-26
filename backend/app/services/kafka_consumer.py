from aiokafka import AIOKafkaConsumer

async def consume():
    consumer = AIOKafkaConsumer(
        'football_goals',
        bootstrap_servers='localhost:9092',
        group_id="football-bingo"
    )
    await consumer.start()
    try:
        async for msg in consumer:
            print(f"Received message: {msg.value}")
    finally:
        await consumer.stop()