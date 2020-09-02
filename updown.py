import random

state = []

class agent():
    def __init__(self):
        self.state = []
        self.policy = [0,100]
    
    def action(self):
        action = random.randint(self.policy[0],self.policy[1])
        self.state.append(action)
        return action
    
    def reinforce(self, reward):
        if reward == -1: # action이 ans보다 작다.
            self.policy[0] += 1
        elif reward == 1: # action이 ans보다 크다.
            self.policy[1] -= 1



class env():
    def __init__(self):
        self.reward = 0
        self.ans = random.randint(0,100)
        self.done = False
    
    def interact(self, agent):
        while(self.done == False):
            action = agent.action()
            print("interact action : ", action)
            if action < self.ans:
                self.reward = -1
                agent.reinforce(self.reward)
            elif action > self.ans:
                self.reward = 1
                agent.reinforce(self.reward)
            else:
                self.done = True

env1 = env()
agent1 = agent()

print("ans : ", env1.ans)
env1.interact(agent1)
print("ans : ", env1.ans)
print("state : ", agent1.state)