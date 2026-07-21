function getDist(x1, y1, z1, x2, y2, z2)
return math.sqrt((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)

end

onMessage = Chat:createTextBuilder():append("Bread Crumbs Started"):withColor(0xa):build()
offMessage = Chat:createTextBuilder():append("Bread Crumbs Paused"):withColor(0xc):build()

--waitTime = GlobalVars:getDouble("breadCrumbsWaitTime") or 2
distThreshold = GlobalVars:getDouble("breadCrumbsDistThreshold") or 2
color = GlobalVars:getInt("breadCrumbsColor") or 0x00ff00
doCubes = GlobalVars:getBoolean("breadCrumbsDoCubes") or false
alpha = (256/4) - 1 --25%

toggle = not GlobalVars:getBoolean("breadCrumbsToggle")
GlobalVars:putBoolean("breadCrumbsToggle", toggle)

draw3Ds = GlobalVars:getObject("breadCrumbsDraw3Ds") or {draws={}, isShown={}, pos={}}
newRender = Hud:createDraw3D()
Hud:registerDraw3D(newRender)
table.insert(draw3Ds.draws, newRender)
table.insert(draw3Ds.isShown, true)
table.insert(draw3Ds.pos, {})
local index = #draw3Ds.pos
GlobalVars:putObject("breadCrumbsDraw3Ds", draw3Ds)

lastX = Player:getPlayer():getX()
lastY = Player:getPlayer():getY()
lastZ = Player:getPlayer():getZ()

if doCubes then
    newRender:addBox(lastX - 0.05, lastY - 0.05, lastZ - 0.05, lastX + 0.05, lastY + 0.05, lastZ + 0.05, color, alpha, color, alpha, true)
end

Chat:actionbar(onMessage, true)
while toggle do
    xCoord = Player:getPlayer():getX()
    yCoord = Player:getPlayer():getY()
    zCoord = Player:getPlayer():getZ()
    if getDist(lastX, lastY, lastZ, xCoord, yCoord, zCoord) >= distThreshold then
        table.insert(draw3Ds.pos[index], "{" .. tostring(xCoord) .. " " .. tostring(yCoord) .. " " .. tostring(zCoord) .. "}")
        newRender:addLine(xCoord, yCoord, zCoord, lastX, lastY, lastZ, color, false)
        if doCubes then
            newRender:addBox(xCoord - 0.05, yCoord - 0.05, zCoord - 0.05, xCoord + 0.05, yCoord + 0.05, zCoord + 0.05, color, alpha, color, alpha, true)
        end
        lastX = xCoord
        lastY = yCoord
        lastZ = zCoord
    end
    Client:waitTick()
    toggle = GlobalVars:getBoolean("breadCrumbsToggle")
end
Chat:actionbar(offMessage, true)
GlobalVars:putObject("breadCrumbsDraw3Ds", draw3Ds)
