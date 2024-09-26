from fastapi import APIRouter

router = APIRouter()

@router.get("/players")
def get_players():
    return {"message": "List of players"}