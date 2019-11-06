#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	int a,b,c,d;
	cin>>a>>b>>c>>d;
	if ((a==c) && (abs(d-b)==1)) || ((b==d) && (abs(a-c)==1)) || ((abs(d-b)==1) && (abs(d-b)==1)){
		cout<<"YES";
	} else cout<<"NO";
	
	return 0;
}