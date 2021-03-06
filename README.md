# website_shortcuts

The purpose of this project is to allow one to permanently create shortcuts to their favorite websites, with certain settings turned on.

this project accomplishes its goal by assuming the website utilizes an url protocol whose parts are easy to decipher.  note: some websites url protocols will not be usuable with this simple program.

this program is extensible.  by creating more 'store objects', with the correct information, more shortcuts can easily be added.  information about this is provided at the end of this text.

this program relies heavily on javascript, and NOT jQuery; so mileage with your browser may vary.

this program currently works, but it could definitely use some 'tidying up'.  as it stands, there is no encapsulation of functions and marginal encapsulation of var's, so your global domain could get collisions.  there is also extensive use of class names for dom manipulation and their names are inconsistent and perhaps confusing.  but it all works as of this upload.  it'll cleaned up eventually (i prooooooomise)


!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!URL MAGIC EXPLAINED
!!!!!!!!!!!!!!!!!!!!!!!!!!!

ok, lets talk about how this thing works.  we'll use amazon and homedepot as examples.

AMAZON EXAMPLE:

   first, lets visit amazon, and set all the settings how we want it (lowest price, free shipping, etc.)
   next, lets type something into amazons search and hit enter.  for this example lets use 'hose'.  so search for hose on amazon.
   
   ok, after hitting search for hose on amazon with all your settings set, the url at the top of the browser should look something like this: 
   
   https://www.amazon.com/s/ref=sr_st_price-asc-rank?keywords=hose&fst=as%3Aoff&rh=n%3A2972638011%2Cn%3A3610851%2Cn%3A553958%2Cn%3A553966%2Ck%3Ahose%2Cp_85%3A2470955011&qid=1535999006&sort=price-asc-rank
   

yea....that's alot of text.  but lets try to break it down.  

the url above contains two parts: 

      1)an / address / we / are / querying
      2)key=value pairs of query parameters.  

NOTE THAT:
   
   1) the address and key=value pairs are ALWAYS SEPERATED by ? 
   2) and each key=value pair are ALWAYS SEPERATED by a &
      
   in essence, all urls can be thought of in this fashion.

         go/to/this/address   ?   key1=value1 & key2=value2 &  key3=value3  ....

for the url above, 
  
  the address is 
    https://www.amazon.com/s/ref=sr_st_price-asc-rank
  
  and the key=value pairs of query parameters are
    
    keywords=hose&fst=as%3Aoff&rh=n%3A2972638011%2Cn%3A3610851%2Cn%3A553958%2Cn%3A553966%2Ck%3Ahose%2Cp_85%3A2470955011&qid=1535999006&sort=price-asc-rank
    
    the key=value pairs used in the above are as follows
      
      keywords=hose
      fst=as%3Aoff
      rh=n%3A2972638011%2Cn%3A3610851%2Cn%3A553958%2Cn%3A553966%2Ck%3Ahose%2Cp_85%3A2470955011
      qid=1535999006
      sort=price-asc-rank
  
 
 OK.  so now that we know how URLS work, lets use that to our advantage:
 
 in the above listed key=value pairs, do you see our search term hose?
 it was the value, for the key, keywords
 
 the rest of the key=value pairs are our settings we set (for ex:   sort=price-asc-rank )  -yours will be different.
 

SO, BY USING THE URL ON AMAZON WITH OUR SETTINGS SET, AND SEARCHING FOR HOSE WE GOT

https://www.amazon.com/s/ref=sr_st_price-asc-rank?keywords=hose&fst=as%3Aoff&rh=n%3A2972638011%2Cn%3A3610851%2Cn%3A553958%2Cn%3A553966%2Ck%3Ahose%2Cp_85%3A2470955011&qid=1535999006&sort=price-asc-rank

WHAT IF WE JUST KEPT REPLACING JUST SOME OF THE ABOVE URL (like our search term) SO WE ALWAYS HAVE EVERYTHING SET THE WAY WE LIKE?!

in essence, all we want to do is use the above url, but replace hose with our own search term, (keeping everything else the same)

in essence we want to go to
https://www.amazon.com/s/ref=sr_st_price-asc-rank?keywords=OUR_SEARCH_TERM&fst=as%3Aoff&rh=n%3A2972638011%2Cn%3A3610851%2Cn%3A553958%2Cn%3A553966%2Ck%3Ahose%2Cp_85%3A2470955011&qid=1535999006&sort=price-asc-rank


so lets do that.



