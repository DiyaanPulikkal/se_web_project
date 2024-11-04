from models.student_model import Student
from typing import List

class Participant:
    def __init__(self, participant: List[int], isGroup):
        self.participant = participant
        self.isGroup = isGroup
        self.isValid = False