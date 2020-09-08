import random
import pandas as pd
import math

def soft_max_policy_update(policy, reward, done_action):
    for key in policy:
        if int(key) == done_action:
            policy[key] = policy[key] * reward
        else:
            policy[key] = policy[key] * reward*(-1)

    bunmo = 0
    for key in policy:
        bunmo += math.exp(policy[key])
    
    for key in policy:
        policy[key] = round(math.exp(policy[key]) / bunmo,3)
    print("updated policy :",policy)
    return policy


class agent():
    def __init__(self):
        self.state = []
        self.state.append(random.randint(1,100))
        # self.policy = 
        self.action_list = [-10, -5, -1, 1, 5, 10]
        self.policy = {'-10' : 1/6, '-5' : 1/6, '-1': 1/6, '1' :1/6, '5' : 1/6, '10': 1/6}
        self.done_ac_list = []
        
    
    #action sampling
    def action(self):
        seed = random.random() #0~1
        #print("seed : ",seed)
        cum = 0 #확률의 누적값
        for i in range(0,len(self.action_list)):
            cum += self.policy[str(self.action_list[i])] 
            if seed < cum:
                self.state.append(self.state[-1]+self.action_list[i])
                print("state : ",self.state)
                self.done_ac_list.append(self.action_list[i])
                return self.action_list[i]
        print("이거 출력되면 안됨")
        return 5
    
    def reinforce(self, reward):
        self.policy = soft_max_policy_update(self.policy, reward, self.done_ac_list[-1])

class env():
    def __init__(self):
        self.reward = 0
        self.ans = random.randint(0,100)
        print("정답은 : ",self.ans)
    
    def interact(self, agent1):
        while(1):
            agent1.action()
            if agent1.state[-1] == self.ans:
                break
            if len(agent1.state) < 2:
                how_bad_yesterday = 0
            else:
                how_bad_yesterday = (self.ans - agent1.state[-2])**2

            how_bad_today = (self.ans - agent1.state[-1])**2
            # print("yester day_hb :",how_bad_yesterday)
            # print("today_hb :",how_bad_today)

            how_bad = how_bad_today - how_bad_yesterday
            # print("how_bad : ", how_bad)

            if how_bad > 100 : #매우 못함
                self.reward = -10
                agent1.reinforce(self.reward)
            elif how_bad > 25: #못함
                self.reward = -5
                agent1.reinforce(self.reward)
            elif how_bad < -100: #매우 잘함
                self.reward = 10
                agent1.reinforce(self.reward)
            elif how_bad < -25: # 잘함
                self.reward = 5
                agent1.reinforce(self.reward)
            else: # 보통
                self.reward = 0.1
                agent1.reinforce(self.reward)
            
            # 너무 길면 걍 나와!
            # if len(agent1.state) > 100:
            #     self.done = True

env1 = env()
agent1 = agent()

env1.interact(agent1)
print("정답 :", env1.ans)
# action_list = [-10, -5, -1, 1, 5, 10]
# policy = {'-10' : 1/6, '-5' : 1/6, '-1': 1/6, '1' :1/6, '10': 1/6}

# for key in policy:
#     print(int(key), type(int(key)))
#     print(policy[key], type(policy[key]))
