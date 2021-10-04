<# Powershell script to query for computers in the local network #>
## Ping subnet range
$Subnet = "192.168."
1..254|ForEach-Object{
    Start-Process -WindowStyle Hidden ping.exe -Argumentlist "-n 1 -l 0 -f -i 2 -w 1 -4 $SubNet$_"
}
## get list of computers in the subnet using arp
$Computers =(arp.exe -a | Select-String "$SubNet") -replace ' +',','|
  ConvertFrom-Csv -Header Computername,IPv4,MAC,x,Vendor|
                   Select Computername,IPv4,MAC
## attach computername based on Ipv4 adress matching
ForEach ($Computer in $Computers){
  nslookup $Computer.IPv4|Select-String -Pattern "^Name:\s+([^\.]+).*$"|
    ForEach-Object{
      $Computer.Computername = $_.Matches.Groups[1].Value
    }
}
$Computers | ConvertTo-Json
##$Computers | ConvertTo-Json | Out-File iplisttmp.json 
<#. Note: use  "Subnet*dynam" n arp command to select only dynamic ip adresses #>