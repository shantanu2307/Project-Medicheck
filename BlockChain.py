import hashlib
class block:
    def __init__(self,no,nonce,data,hash,prev):
        self.no=no
        self.nonce=nonce 
        self.data=data 
        self.hash=hash
        self.prev=prev 
    def getStringVal(self):
        return self.no,self.nonce,self.data,self.hash,self.prev
class BlockChain:
    def __init__(self):
        self.chain=[]
        self.prefix="0000"
    def addNewBlock(self,data):
        no=len(self.chain)
        nonce=0
        if(len(self.chain)==0):
            prev="0"
        else:
            prev=self.chain[-1].hash
        myHash = hashlib.sha256(str(data).encode("utf-8")).hexdigest()
        block=BlockChain(no,nonce,data,myHash,prev)
        self.chain.append(block)
    def printBlockChain(self):
        chainDict={}
        for no in range(len(self.chain)):
            chainDict[no]=self.chain[no].getStringVal()
        print(chainDict)
    def mineChain(self):
        brokenLink=self.checkIfBroken()
        if(brokenLink==None):
            pass 
        else:
            for block in self.chain[brokenLink.no:]:
                print("Mining block:",block.getStringVal())
                self.mineBlock(block)
    def checkIfBroken(self):
        for no in range(len(self.chain)):
            if(self.chain[no].hash[0:4]==self.prefix):
                pass 
            else:
                return self.chain[no]
    def mineBlock(self,block):
        nonce=0
        myHash=hashlib.sha256((str(nonce)+str(block.data)).encode('utf-8')).hexdigest()
        while myHash[0:4]!=self.prefix:
            myHash=hashlib.sha256((str(nonce)+str(block.data)).encode('utf-8')).hexdigest()
            nonce=nonce+1
        else:
            self.chain[block.no].hash=myHash
            self.chain[block.no].nonce=nonce 
            if(block.no<len(self.chain)-1):
                self.chain[block.no+1].prev=myHash
    def changeData(self,no,data,nonce):
        self.chain[no].data=data 
        self.chain[no].hash=hashlib.sha256((str(nonce)+str(block.data)).encode('utf-8')).hexdigest()